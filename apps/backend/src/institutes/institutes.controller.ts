import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InstituteVerificationStatus, UserRole } from '@prisma/client';
import { InstitutesService } from './institutes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Institutes')
@Controller('api/institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Get()
  @ApiOperation({ summary: 'List all verified maritime training institutes (Public)' })
  findAllVerified() {
    return this.institutesService.findAllVerified();
  }

  @Get('pending')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List institutes pending approval (Admin only)' })
  findPending() {
    return this.institutesService.findPendingApproval();
  }

  @Get('my-institute')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN, UserRole.INSTITUTE_STAFF)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user institute profile' })
  getMyInstitute(@CurrentUser() user: any) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.institutesService.findById(user.instituteId);
  }

  @Patch('my-institute')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.INSTITUTE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update institute profile information' })
  updateMyInstitute(
    @CurrentUser() user: any,
    @Body() body: any,
  ) {
    if (!user.instituteId) {
      throw new UnauthorizedException('User is not associated with an institute');
    }
    return this.institutesService.updateMyInstitute(user.instituteId, body);
  }

  @Patch(':id/verify')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve or Reject institute verification (Admin only)' })
  verifyInstitute(
    @Param('id') id: string,
    @Body('status') status: InstituteVerificationStatus,
    @CurrentUser() user: any,
  ) {
    return this.institutesService.updateVerificationStatus(id, status, user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get institute details by ID' })
  findById(@Param('id') id: string) {
    return this.institutesService.findById(id);
  }
}
