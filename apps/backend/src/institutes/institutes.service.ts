import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InstituteVerificationStatus, UserRole } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InstitutesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllVerified() {
    return this.prisma.institute.findMany({
      where: { verificationStatus: InstituteVerificationStatus.VERIFIED },
      include: {
        _count: {
          select: { courses: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findPendingApproval() {
    return this.prisma.institute.findMany({
      where: { verificationStatus: InstituteVerificationStatus.PENDING },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            fullName: true,
            phone: true,
            role: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const institute = await this.prisma.institute.findUnique({
      where: { id },
      include: {
        courses: {
          where: { approvalStatus: 'APPROVED' },
          include: { batches: true },
        },
      },
    });

    if (!institute) {
      throw new NotFoundException('Institute not found');
    }

    return institute;
  }

  async updateMyInstitute(
    instituteId: string,
    data: {
      websiteUrl?: string;
      logoUrl?: string;
      address?: string;
      city?: string;
      state?: string;
      contactPhone?: string;
    },
  ) {
    return this.prisma.institute.update({
      where: { id: instituteId },
      data,
    });
  }

  async updateVerificationStatus(
    instituteId: string,
    status: InstituteVerificationStatus,
    adminUserId: string,
  ) {
    const institute = await this.prisma.institute.findUnique({
      where: { id: instituteId },
    });

    if (!institute) {
      throw new NotFoundException('Institute not found');
    }

    const updated = await this.prisma.institute.update({
      where: { id: instituteId },
      data: { verificationStatus: status },
    });

    // Create Audit Log
    await this.prisma.auditLog.create({
      data: {
        userId: adminUserId,
        action: `INSTITUTE_VERIFICATION_${status}`,
        entityType: 'INSTITUTE',
        entityId: instituteId,
        details: { previousStatus: institute.verificationStatus, newStatus: status },
      },
    });

    return updated;
  }
}
