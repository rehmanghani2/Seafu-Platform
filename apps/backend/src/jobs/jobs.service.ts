import { Injectable, NotFoundException, ForbiddenException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobPostDto, UpdateJobPostDto, JobFilterQueryDto, ApplyToJobDto } from './dto/job.dto';
import { JobStatus, JobApplicationStatus, UserRole } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  // ─── Job Board (Public) ───────────────────────────────────────────────────

  async findAll(query: JobFilterQueryDto) {
    const { jobType, rank, shipType, portOfJoining, search, page = 1, limit = 20 } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.JobPostWhereInput = {
      status: JobStatus.ACTIVE,
    };

    if (jobType) where.jobType = jobType;
    if (rank) where.rank = { contains: rank, mode: 'insensitive' };
    if (shipType) where.shipType = { contains: shipType, mode: 'insensitive' };
    if (portOfJoining) where.portOfJoining = { contains: portOfJoining, mode: 'insensitive' };
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { rank: { contains: search, mode: 'insensitive' } },
        { companyName: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [total, jobs] = await Promise.all([
      this.prisma.jobPost.count({ where }),
      this.prisma.jobPost.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          institute: {
            select: { name: true, city: true, state: true },
          },
          _count: { select: { applications: true } },
        },
      }),
    ]);

    return {
      data: jobs,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const job = await this.prisma.jobPost.findUnique({
      where: { id },
      include: {
        institute: {
          select: { name: true, city: true, state: true, logoUrl: true },
        },
        _count: { select: { applications: true } },
      },
    });
    if (!job) throw new NotFoundException('Job post not found');
    return job;
  }

  // ─── Institute/Admin: Create & Manage Jobs ───────────────────────────────

  async create(dto: CreateJobPostDto, userId: string) {
    // Find institute linked to this user
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { institute: true },
    });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 60); // 60-day expiry

    return this.prisma.jobPost.create({
      data: {
        title: dto.title,
        jobType: dto.jobType,
        rank: dto.rank,
        shipType: dto.shipType,
        portOfJoining: dto.portOfJoining,
        salary: dto.salary,
        currency: dto.currency ?? 'USD',
        contractDuration: dto.contractDuration,
        description: dto.description,
        requirements: dto.requirements ?? [],
        companyName: user?.institute?.name ?? 'Seafu Shipping',
        instituteId: user?.instituteId ?? undefined,
        postedBy: userId,
        status: JobStatus.ACTIVE,
        expiresAt,
      },
    });
  }

  async update(id: string, dto: UpdateJobPostDto, userId: string, userRole: UserRole) {
    const job = await this.prisma.jobPost.findUnique({ where: { id } });
    if (!job) throw new NotFoundException('Job post not found');
    if (job.postedBy !== userId && userRole !== UserRole.SUPER_ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const data: Prisma.JobPostUpdateInput = {};
    if (dto.title !== undefined) data.title = dto.title;
    if (dto.description !== undefined) data.description = dto.description;
    if (dto.salary !== undefined) data.salary = dto.salary;
    if (dto.requirements !== undefined) data.requirements = dto.requirements;
    if (dto.status !== undefined) data.status = dto.status as JobStatus;

    return this.prisma.jobPost.update({ where: { id }, data });
  }

  async closeJob(id: string, userId: string, userRole: UserRole) {
    const job = await this.prisma.jobPost.findUnique({ where: { id } });
    if (!job) throw new NotFoundException('Job post not found');
    if (job.postedBy !== userId && userRole !== UserRole.SUPER_ADMIN) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.jobPost.update({
      where: { id },
      data: { status: JobStatus.CLOSED },
    });
  }

  async getMyPostedJobs(userId: string) {
    return this.prisma.jobPost.findMany({
      where: { postedBy: userId },
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { applications: true } } },
    });
  }

  // ─── Applicants for a Job (Recruiter/ATS View) ───────────────────────────

  async getApplicants(jobId: string, userId: string) {
    const job = await this.prisma.jobPost.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job post not found');
    if (job.postedBy !== userId) throw new ForbiddenException('Access denied');

    return this.prisma.jobApplication.findMany({
      where: { jobPostId: jobId },
      orderBy: { createdAt: 'desc' },
      include: {
        seafarer: {
          select: {
            id: true,
            fullName: true,
            email: true,
            indosNumber: true,
            cdcNumber: true,
            rank: true,
            avatarUrl: true,
            certificates: {
              select: { title: true, issueDate: true, expiryDate: true, isVerified: true },
              take: 5,
            },
          },
        },
      },
    });
  }

  async updateApplicationStatus(applicationId: string, status: JobApplicationStatus, userId: string) {
    const application = await this.prisma.jobApplication.findUnique({
      where: { id: applicationId },
      include: { jobPost: { select: { postedBy: true } } },
    });
    if (!application) throw new NotFoundException('Application not found');
    if (application.jobPost.postedBy !== userId) throw new ForbiddenException('Access denied');

    return this.prisma.jobApplication.update({
      where: { id: applicationId },
      data: { status },
    });
  }

  // ─── Seafarer: Apply & Track ──────────────────────────────────────────────

  async apply(jobId: string, dto: ApplyToJobDto, seafarerId: string) {
    const job = await this.prisma.jobPost.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job post not found');
    if (job.status !== JobStatus.ACTIVE) {
      throw new ConflictException('This job is no longer accepting applications');
    }

    const existing = await this.prisma.jobApplication.findFirst({
      where: { jobPostId: jobId, seafarerId },
    });
    if (existing) throw new ConflictException('You have already applied to this job');

    return this.prisma.jobApplication.create({
      data: {
        jobPostId: jobId,
        seafarerId,
        coverNote: dto.coverNote ?? '',
        status: JobApplicationStatus.APPLIED,
      },
    });
  }

  async getMyApplications(seafarerId: string) {
    return this.prisma.jobApplication.findMany({
      where: { seafarerId },
      orderBy: { createdAt: 'desc' },
      include: {
        jobPost: {
          include: {
            institute: { select: { name: true, city: true, state: true, logoUrl: true } },
          },
        },
      },
    });
  }

  async withdrawApplication(applicationId: string, seafarerId: string) {
    const application = await this.prisma.jobApplication.findUnique({ where: { id: applicationId } });
    if (!application) throw new NotFoundException('Application not found');
    if (application.seafarerId !== seafarerId) throw new ForbiddenException('Access denied');

    return this.prisma.jobApplication.delete({ where: { id: applicationId } });
  }
}
