import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CourseApprovalStatus,
  CourseCategory,
  InstituteVerificationStatus,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateCourseDto,
  CreateBatchDto,
  CourseFilterQueryDto,
} from './dto/course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: CourseFilterQueryDto) {
    const where: Prisma.CourseWhereInput = {
      approvalStatus: CourseApprovalStatus.APPROVED,
    };

    if (query.category) {
      where.category = query.category;
    }

    if (query.isDgApproved !== undefined) {
      where.isDgApproved = query.isDgApproved;
    }

    if (query.city) {
      where.institute = {
        city: { equals: query.city, mode: 'insensitive' },
      };
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
        { code: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    if (query.minPrice || query.maxPrice) {
      where.basePrice = {};
      if (query.minPrice) where.basePrice.gte = query.minPrice;
      if (query.maxPrice) where.basePrice.lte = query.maxPrice;
    }

    let orderBy: Prisma.CourseOrderByWithRelationInput = { createdAt: 'desc' };
    if (query.sortBy === 'price_asc') {
      orderBy = { basePrice: 'asc' };
    } else if (query.sortBy === 'price_desc') {
      orderBy = { basePrice: 'desc' };
    }

    return this.prisma.course.findMany({
      where,
      include: {
        institute: {
          select: {
            id: true,
            name: true,
            city: true,
            state: true,
            dgShippingApprovalNumber: true,
            logoUrl: true,
            verificationStatus: true,
          },
        },
        batches: {
          where: {
            startDate: { gte: new Date() },
            status: 'UPCOMING',
          },
          orderBy: { startDate: 'asc' },
          take: 3,
        },
      },
      orderBy,
    });
  }

  async findById(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        institute: {
          select: {
            id: true,
            name: true,
            slug: true,
            city: true,
            state: true,
            address: true,
            contactEmail: true,
            contactPhone: true,
            websiteUrl: true,
            logoUrl: true,
            dgShippingApprovalNumber: true,
            verificationStatus: true,
          },
        },
        batches: {
          where: {
            startDate: { gte: new Date() },
            status: 'UPCOMING',
          },
          orderBy: { startDate: 'asc' },
        },
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return course;
  }

  async createCourse(instituteId: string, dto: CreateCourseDto) {
    const institute = await this.prisma.institute.findUnique({
      where: { id: instituteId },
    });

    if (!institute) {
      throw new NotFoundException('Institute not found');
    }

    const slug = `${dto.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`;

    return this.prisma.course.create({
      data: {
        instituteId,
        title: dto.title,
        code: dto.code.toUpperCase(),
        slug,
        description: dto.description,
        category: dto.category,
        isDgApproved: dto.isDgApproved ?? true,
        approvalStatus: CourseApprovalStatus.PENDING_APPROVAL,
        durationDays: dto.durationDays,
        basePrice: dto.basePrice,
        currency: dto.currency || 'INR',
        prerequisites: dto.prerequisites || [],
        syllabus: dto.syllabus,
      },
    });
  }

  async createBatch(instituteId: string, courseId: string, dto: CreateBatchDto) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course.instituteId !== instituteId) {
      throw new ForbiddenException('You do not own this course');
    }

    const startDate = new Date(dto.startDate);
    const endDate = new Date(dto.endDate);

    if (endDate <= startDate) {
      throw new BadRequestException('Batch end date must be after start date');
    }

    return this.prisma.courseBatch.create({
      data: {
        courseId,
        startDate,
        endDate,
        totalSeats: dto.totalSeats,
        availableSeats: dto.totalSeats,
        price: dto.price,
      },
    });
  }

  async findInstituteCourses(instituteId: string) {
    return this.prisma.course.findMany({
      where: { instituteId },
      include: {
        batches: {
          orderBy: { startDate: 'asc' },
        },
        _count: {
          select: { bookings: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findPendingApproval() {
    return this.prisma.course.findMany({
      where: { approvalStatus: CourseApprovalStatus.PENDING_APPROVAL },
      include: {
        institute: {
          select: {
            id: true,
            name: true,
            dgShippingApprovalNumber: true,
            city: true,
            state: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateApprovalStatus(
    courseId: string,
    status: CourseApprovalStatus,
    adminId: string,
  ) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const updated = await this.prisma.course.update({
      where: { id: courseId },
      data: { approvalStatus: status },
    });

    await this.prisma.auditLog.create({
      data: {
        userId: adminId,
        action: `COURSE_APPROVAL_${status}`,
        entityType: 'COURSE',
        entityId: courseId,
        details: { previousStatus: course.approvalStatus, newStatus: status },
      },
    });

    return updated;
  }
}
