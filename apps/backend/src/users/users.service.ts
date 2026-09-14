import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        institute: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { passwordHash, ...safeUser } = user;
    return safeUser;
  }

  async updateSeafarerProfile(
    userId: string,
    data: {
      fullName?: string;
      phone?: string;
      indosNumber?: string;
      cdcNumber?: string;
      rank?: string;
      nationality?: string;
    },
  ) {
    const updated = await this.prisma.user.update({
      where: { id: userId },
      data,
    });

    const { passwordHash, ...safeUser } = updated;
    return safeUser;
  }
}
