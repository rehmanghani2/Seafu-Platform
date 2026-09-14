import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseApprovalStatus, UserRole } from '@prisma/client';
import { CoursesService } from './courses.service';
import {
  CreateCourseDto,
  CreateBatchDto,
  CourseFilterQueryDto,
} from './dto/course.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Courses')
@Controller('api/courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: 'Discover and filter DG-approved courses (Public)' })
  findAll(@Query() query: CourseFilterQueryDto) {
    return this.coursesService.findAll(query);
  }

  @Get('admin/pending')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List courses pending approval (Admin only)' })
  findPending() {
    return this.coursesService.findPendingApproval();
  }

  @Get('institute/my-courses')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.INSTITUTE_STAFF)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all courses created by current institute' })
  findMyCourses(@CurrentUser() user: any) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.coursesService.findInstituteCourses(user.instituteId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get course details by ID including batches (Public)' })
  findById(@Param('id') id: string) {
    return this.coursesService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new course (Institute Admin)' })
  createCourse(@CurrentUser() user: any, @Body() dto: CreateCourseDto) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.coursesService.createCourse(user.instituteId, dto);
  }

  @Post(':id/batches')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.INSTITUTE_STAFF)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Schedule a new batch for course (Institute)' })
  createBatch(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() dto: CreateBatchDto,
  ) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.coursesService.createBatch(user.instituteId, id, dto);
  }

  @Patch(':id/approval')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve or Reject a course (Admin only)' })
  updateApproval(
    @Param('id') id: string,
    @Body('status') status: CourseApprovalStatus,
    @CurrentUser() user: any,
  ) {
    return this.coursesService.updateApprovalStatus(id, status, user.id);
  }
}
