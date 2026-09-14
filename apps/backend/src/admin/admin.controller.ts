import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import {
  UpdateInstituteStatusDto,
  UpdateCourseStatusDto,
  AuditLogFilterQueryDto,
  CreateAuditLogDto,
} from './dto/admin.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserRole, InstituteVerificationStatus, CourseApprovalStatus } from '@prisma/client';

@ApiTags('Admin Governance')
@Controller('api/admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ─── Platform Analytics ───────────────────────────────────────────────────

  @Get('metrics')
  @ApiOperation({ summary: 'Get comprehensive platform operational & financial metrics' })
  getPlatformMetrics() {
    return this.adminService.getPlatformMetrics();
  }

  @Get('regulatory-report')
  @ApiOperation({ summary: 'Generate DG Shipping regulatory oversight & compliance report' })
  getRegulatoryReport() {
    return this.adminService.getRegulatoryComplianceReport();
  }

  // ─── Institute Management ─────────────────────────────────────────────────

  @Get('institutes')
  @ApiOperation({ summary: 'List all institutes filtered by verification status' })
  getInstitutes(@Query('status') status?: InstituteVerificationStatus) {
    return this.adminService.getInstitutes(status);
  }

  @Patch('institutes/:id/status')
  @ApiOperation({ summary: 'Approve, Reject, or Suspend an Institute with audit logging' })
  updateInstituteStatus(
    @Param('id') id: string,
    @Body() dto: UpdateInstituteStatusDto,
    @CurrentUser() user: any,
  ) {
    return this.adminService.updateInstituteStatus(id, dto, user.userId);
  }

  // ─── Course Compliance ────────────────────────────────────────────────────

  @Get('courses')
  @ApiOperation({ summary: 'List all courses filtered by approval status' })
  getCourses(@Query('approvalStatus') approvalStatus?: CourseApprovalStatus) {
    return this.adminService.getCourses(approvalStatus);
  }

  @Patch('courses/:id/status')
  @ApiOperation({ summary: 'Approve or Reject a Course curriculum with audit logging' })
  updateCourseStatus(
    @Param('id') id: string,
    @Body() dto: UpdateCourseStatusDto,
    @CurrentUser() user: any,
  ) {
    return this.adminService.updateCourseStatus(id, dto, user.userId);
  }

  // ─── Financials & Settlements ─────────────────────────────────────────────

  @Get('financial-ledger')
  @ApiOperation({ summary: 'Get dual-invoicing financial reconciliation ledger' })
  getFinancialLedger() {
    return this.adminService.getFinancialLedger();
  }

  // ─── Immutable Audit Trail ────────────────────────────────────────────────

  @Get('audit-logs')
  @ApiOperation({ summary: 'Query immutable security & operational audit logs' })
  getAuditLogs(@Query() query: AuditLogFilterQueryDto) {
    return this.adminService.getAuditLogs(query);
  }

  @Post('audit-logs')
  @ApiOperation({ summary: 'Write a manual compliance or security audit note' })
  createAuditLog(
    @Body() dto: CreateAuditLogDto,
    @CurrentUser() user: any,
    @Req() req: any,
  ) {
    return this.adminService.logAction({
      ...dto,
      userId: user.userId,
      ipAddress: req.ip || req.connection?.remoteAddress,
      userAgent: req.headers['user-agent'],
    });
  }
}
