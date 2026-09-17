import { IsString, IsOptional, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { InstituteVerificationStatus, CourseApprovalStatus, UserRole } from '@prisma/client';

export class UpdateInstituteStatusDto {
  @IsEnum(InstituteVerificationStatus)
  status: InstituteVerificationStatus;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class UpdateCourseStatusDto {
  @IsEnum(CourseApprovalStatus)
  approvalStatus: CourseApprovalStatus;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class UpdateUserStatusDto {
  @IsString()
  status: string; // 'ACTIVE' | 'SUSPENDED' | 'PENDING_KYC'

  @IsOptional()
  @IsString()
  reason?: string;
}

export class CertificateApprovalDto {
  @IsString()
  decision: 'APPROVED' | 'REJECTED';

  @IsOptional()
  @IsString()
  remarks?: string;
}

export class CreateCmsArticleDto {
  @IsString()
  title: string;

  @IsString()
  category: string; // 'CIRCULAR' | 'ADMISSION' | 'ADVISORY' | 'INDUSTRY'

  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  targetAudience?: string; // 'ALL' | 'SEAFARERS' | 'INSTITUTES'

  @IsOptional()
  isPublished?: boolean;
}

export class AuditLogFilterQueryDto {
  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  entityType?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}

export class CreateAuditLogDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsString()
  action: string;

  @IsString()
  entityType: string;

  @IsString()
  entityId: string;

  @IsOptional()
  details?: any;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;
}
