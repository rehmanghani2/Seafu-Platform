import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { UserRole, InstituteVerificationStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  LoginDto,
  RegisterInstituteDto,
  RegisterSeafarerDto,
  RefreshTokenDto,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async registerSeafarer(dto: RegisterSeafarerDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (existing) {
      throw new ConflictException('An account with this email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(dto.password, salt);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
        fullName: dto.fullName,
        phone: dto.phone,
        indosNumber: dto.indosNumber,
        cdcNumber: dto.cdcNumber,
        rank: dto.rank,
        role: UserRole.SEAFARER,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email, user.role);

    return {
      message: 'Seafarer registered successfully',
      user: this.sanitizeUser(user),
      tokens,
    };
  }

  async registerInstitute(dto: RegisterInstituteDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (existingUser) {
      throw new ConflictException('An account with this email already exists');
    }

    const slug = dto.instituteName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(dto.password, salt);

    // Create Institute and Institute Admin user in a single transaction
    const result = await this.prisma.$transaction(async (tx) => {
      const institute = await tx.institute.create({
        data: {
          name: dto.instituteName,
          slug: `${slug}-${Date.now().toString().slice(-4)}`,
          dgShippingApprovalNumber: dto.dgShippingApprovalNumber,
          verificationStatus: InstituteVerificationStatus.PENDING,
          contactEmail: dto.email.toLowerCase(),
          contactPhone: dto.phone,
          city: dto.city,
          state: dto.state,
          country: 'India',
          address: dto.address,
        },
      });

      const user = await tx.user.create({
        data: {
          email: dto.email.toLowerCase(),
          passwordHash,
          fullName: dto.contactPersonName,
          phone: dto.phone,
          role: UserRole.INSTITUTE_ADMIN,
          instituteId: institute.id,
        },
      });

      return { institute, user };
    });

    const tokens = await this.generateTokens(
      result.user.id,
      result.user.email,
      result.user.role,
    );

    return {
      message: 'Institute registration submitted for approval',
      institute: result.institute,
      user: this.sanitizeUser(result.user),
      tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
      include: { institute: true },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Your account has been deactivated. Please contact support.');
    }

    const tokens = await this.generateTokens(user.id, user.email, user.role);

    return {
      message: 'Login successful',
      user: this.sanitizeUser(user),
      tokens,
    };
  }

  async refreshToken(dto: RefreshTokenDto) {
    try {
      const payload = this.jwtService.verify(dto.refreshToken, {
        secret: this.configService.get<string>(
          'JWT_REFRESH_SECRET',
          'seafu_refresh_secret_key_development_only',
        ),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || !user.isActive) {
        throw new UnauthorizedException('Invalid session');
      }

      const tokens = await this.generateTokens(user.id, user.email, user.role);
      return {
        message: 'Tokens refreshed',
        tokens,
      };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>(
          'JWT_SECRET',
          'seafu_super_secret_jwt_key_development_only',
        ),
        expiresIn: '7d',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>(
          'JWT_REFRESH_SECRET',
          'seafu_refresh_secret_key_development_only',
        ),
        expiresIn: '30d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
      expiresIn: 604800, // 7 days in seconds
    };
  }

  private sanitizeUser(user: any) {
    const { passwordHash, ...safeUser } = user;
    return safeUser;
  }
}
