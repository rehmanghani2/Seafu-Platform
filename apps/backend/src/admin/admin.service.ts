import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  UpdateInstituteStatusDto,
  UpdateCourseStatusDto,
  AuditLogFilterQueryDto,
  CreateAuditLogDto,
} from './dto/admin.dto';
import { InstituteVerificationStatus, CourseApprovalStatus, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // ─── Platform Analytics & Health ──────────────────────────────────────────

  async getPlatformMetrics() {
    const [
      totalSeafarers,
      totalInstitutes,
      pendingInstitutes,
      totalCourses,
      pendingCourses,
      totalCertificates,
      totalBookings,
      totalJobPosts,
    ] = await Promise.all([
      this.prisma.user.count({ where: { role: 'SEAFARER' } }),
      this.prisma.institute.count({ where: { verificationStatus: InstituteVerificationStatus.VERIFIED } }),
      this.prisma.institute.count({ where: { verificationStatus: InstituteVerificationStatus.PENDING } }),
      this.prisma.course.count({ where: { approvalStatus: CourseApprovalStatus.APPROVED } }),
      this.prisma.course.count({ where: { approvalStatus: CourseApprovalStatus.PENDING_APPROVAL } }),
      this.prisma.certificate.count(),
      this.prisma.booking.count(),
      this.prisma.jobPost.count(),
    ]);

    // Financial calculations
    const bookings = await this.prisma.booking.findMany({
      where: { status: 'CONFIRMED' },
      select: { amount: true },
    });

    const totalGmv = bookings.reduce((sum, b) => sum + Number(b.amount || 0), 0);
    const platformCommission = totalGmv * 0.10; // 10%
    const totalTds = platformCommission * 0.01;  // 1% TDS on platform fee
    const netInstitutePayout = totalGmv - platformCommission;

    return {
      overview: {
        totalSeafarers,
        totalInstitutes,
        pendingInstitutes,
        totalCourses,
        pendingCourses,
        totalCertificates,
        totalBookings,
        totalJobPosts,
      },
      financials: {
        totalGmv,
        platformCommission,
        totalTds,
        netInstitutePayout,
        currency: 'INR',
      },
    };
  }

  // ─── DG Shipping Regulatory Compliance Report ─────────────────────────────

  async getRegulatoryComplianceReport() {
    const [
      institutesByState,
      certsIssuedLast30Days,
      verifiedSeafarersWithIndos,
      totalAuditEvents,
    ] = await Promise.all([
      this.prisma.institute.groupBy({
        by: ['state', 'verificationStatus'],
        _count: { id: true },
      }),
      this.prisma.certificate.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          },
        },
      }),
      this.prisma.user.count({
        where: {
          role: 'SEAFARER',
          indosNumber: { not: null },
        },
      }),
      this.prisma.auditLog.count(),
    ]);

    return {
      reportTitle: 'DG Shipping Regulatory Compliance & Oversight Summary',
      generatedAt: new Date().toISOString(),
      authority: 'Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, India',
      stats: {
        certsIssuedLast30Days,
        verifiedSeafarersWithIndos,
        totalAuditEvents,
        institutesByState,
      },
    };
  }

  // ─── Institute Verification Workflow ──────────────────────────────────────

  async getInstitutes(status?: InstituteVerificationStatus) {
    const where = status ? { verificationStatus: status } : {};
    return this.prisma.institute.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { courses: true, certificates: true, users: true },
        },
      },
    });
  }

  async updateInstituteStatus(
    id: string,
    dto: UpdateInstituteStatusDto,
    adminUserId: string,
  ) {
    const institute = await this.prisma.institute.findUnique({ where: { id } });
    if (!institute) throw new NotFoundException('Institute not found');

    const updated = await this.prisma.institute.update({
      where: { id },
      data: { verificationStatus: dto.status },
    });

    // Write audit log
    await this.logAction({
      userId: adminUserId,
      action: `INSTITUTE_STATUS_${dto.status}`,
      entityType: 'Institute',
      entityId: id,
      details: {
        instituteName: institute.name,
        dgShippingApprovalNumber: institute.dgShippingApprovalNumber,
        previousStatus: institute.verificationStatus,
        newStatus: dto.status,
        reason: dto.reason || 'Admin review completed',
      },
    });

    return updated;
  }

  // ─── Course Compliance & Approval ─────────────────────────────────────────

  async getCourses(approvalStatus?: CourseApprovalStatus) {
    const where = approvalStatus ? { approvalStatus } : {};
    return this.prisma.course.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        institute: {
          select: { name: true, city: true, dgShippingApprovalNumber: true },
        },
        _count: { select: { batches: true, bookings: true } },
      },
    });
  }

  async updateCourseStatus(
    id: string,
    dto: UpdateCourseStatusDto,
    adminUserId: string,
  ) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) throw new NotFoundException('Course not found');

    const updated = await this.prisma.course.update({
      where: { id },
      data: { approvalStatus: dto.approvalStatus },
    });

    // Write audit log
    await this.logAction({
      userId: adminUserId,
      action: `COURSE_APPROVAL_${dto.approvalStatus}`,
      entityType: 'Course',
      entityId: id,
      details: {
        courseTitle: course.title,
        courseCode: course.code,
        previousStatus: course.approvalStatus,
        newStatus: dto.approvalStatus,
        reason: dto.reason || 'Admin compliance check',
      },
    });

    return updated;
  }

  // ─── Financial & Settlement Ledger ────────────────────────────────────────

  async getFinancialLedger() {
    const bookings = await this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        seafarer: { select: { fullName: true, indosNumber: true, email: true } },
        course: { select: { title: true, code: true } },
        batch: { select: { startDate: true, endDate: true } },
        transactions: true,
      },
    });

    return bookings.map((b) => {
      const amount = Number(b.amount);
      const commission = amount * 0.10;
      const gst = commission * 0.18; // 18% GST on platform service fee
      const tds = commission * 0.01; // 1% TDS
      const institutePayout = amount - commission;

      return {
        id: b.id,
        bookingReference: b.bookingReference,
        seafarer: b.seafarer,
        course: b.course,
        batch: b.batch,
        amount,
        commission,
        gst,
        tds,
        institutePayout,
        status: b.status,
        transactions: b.transactions,
        createdAt: b.createdAt,
      };
    });
  }

  // ─── Audit Trail & Compliance Logs ────────────────────────────────────────

  async getAuditLogs(query: AuditLogFilterQueryDto) {
    const { action, entityType, userId, page = 1, limit = 25 } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.AuditLogWhereInput = {};
    if (action) where.action = { contains: action, mode: 'insensitive' };
    if (entityType) where.entityType = { contains: entityType, mode: 'insensitive' };
    if (userId) where.userId = userId;

    const [total, logs] = await Promise.all([
      this.prisma.auditLog.count({ where }),
      this.prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: { id: true, fullName: true, email: true, role: true },
          },
        },
      }),
    ]);

    return {
      data: logs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async logAction(dto: CreateAuditLogDto) {
    return this.prisma.auditLog.create({
      data: {
        userId: dto.userId,
        action: dto.action,
        entityType: dto.entityType,
        entityId: dto.entityId,
        details: dto.details ?? {},
        ipAddress: dto.ipAddress ?? '127.0.0.1',
        userAgent: dto.userAgent ?? 'Seafu-System/2.0',
      },
    });
  }
}
