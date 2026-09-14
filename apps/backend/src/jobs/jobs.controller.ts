import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import {
  CreateJobPostDto,
  UpdateJobPostDto,
  JobFilterQueryDto,
  ApplyToJobDto,
  UpdateApplicationStatusDto,
} from './dto/job.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserRole, JobApplicationStatus } from '@prisma/client';

@ApiTags('Jobs')
@Controller('api/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // ─── Public: Job Board ───────────────────────────────────────────────────

  @Get()
  @ApiOperation({ summary: 'Browse active job listings with filters' })
  findAll(@Query() query: JobFilterQueryDto) {
    return this.jobsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get job post detail' })
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  // ─── Institute/Admin: Post & Manage Jobs ─────────────────────────────────

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Post a new job (Institute/Admin only)' })
  create(@Body() dto: CreateJobPostDto, @CurrentUser() user: any) {
    return this.jobsService.create(dto, user.userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update job post' })
  update(@Param('id') id: string, @Body() dto: UpdateJobPostDto, @CurrentUser() user: any) {
    return this.jobsService.update(id, dto, user.userId, user.role);
  }

  @Patch(':id/close')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Close a job post' })
  closeJob(@Param('id') id: string, @CurrentUser() user: any) {
    return this.jobsService.closeJob(id, user.userId, user.role);
  }

  @Get('my/posted')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all jobs posted by my institute' })
  getMyPostedJobs(@CurrentUser() user: any) {
    return this.jobsService.getMyPostedJobs(user.userId);
  }

  @Get(':id/applicants')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'View applicants for a job post (ATS)' })
  getApplicants(@Param('id') id: string, @CurrentUser() user: any) {
    return this.jobsService.getApplicants(id, user.userId);
  }

  @Patch('applications/:applicationId/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update application status (Shortlist/Select/Reject)' })
  updateApplicationStatus(
    @Param('applicationId') applicationId: string,
    @Body() dto: UpdateApplicationStatusDto,
    @CurrentUser() user: any,
  ) {
    return this.jobsService.updateApplicationStatus(applicationId, dto.status as JobApplicationStatus, user.userId);
  }

  // ─── Seafarer: Apply & Track ──────────────────────────────────────────────

  @Post(':id/apply')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: '1-click apply to job with verified Seafu profile' })
  apply(@Param('id') id: string, @Body() dto: ApplyToJobDto, @CurrentUser() user: any) {
    return this.jobsService.apply(id, dto, user.userId);
  }

  @Get('my/applications')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my job applications with status tracking' })
  getMyApplications(@CurrentUser() user: any) {
    return this.jobsService.getMyApplications(user.userId);
  }

  @Delete('applications/:applicationId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Withdraw a job application' })
  withdrawApplication(@Param('applicationId') applicationId: string, @CurrentUser() user: any) {
    return this.jobsService.withdrawApplication(applicationId, user.userId);
  }
}
