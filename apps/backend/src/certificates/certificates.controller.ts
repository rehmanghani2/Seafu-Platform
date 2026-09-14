import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CertificatesService } from './certificates.service';
import { IssueCertificateDto } from './dto/certificate.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Certificates & Vault')
@Controller('api/certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post('issue')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.INSTITUTE_STAFF)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Issue STCW Certificate with cryptographic QR token (Institute)' })
  issueCertificate(@CurrentUser() user: any, @Body() dto: IssueCertificateDto) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.certificatesService.issueCertificate(user.instituteId, dto);
  }

  @Get('my-vault')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get lifelong certificate vault for current seafarer' })
  getMyVault(@CurrentUser() user: any) {
    return this.certificatesService.getMyVault(user.id);
  }

  @Get('dossier/:token')
  @ApiOperation({ summary: 'Get full STCW Certificate Dossier & Cryptographic Ledger (Public)' })
  getDossier(@Param('token') token: string) {
    return this.certificatesService.getDossier(token);
  }

  @Get('verify/:token')
  @ApiOperation({ summary: 'Port State Control & public instant QR validation (Public)' })
  verifyToken(@Param('token') token: string) {
    return this.certificatesService.verifyPublicToken(token);
  }
}