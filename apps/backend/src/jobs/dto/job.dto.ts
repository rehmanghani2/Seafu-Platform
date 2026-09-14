import { IsString, IsOptional, IsEnum, IsNumber, IsArray, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { JobType, JobStatus } from '@prisma/client';

export class CreateJobPostDto {
  @IsString()
  title: string;

  @IsEnum(JobType)
  jobType: JobType;

  @IsString()
  rank: string;

  @IsOptional()
  @IsString()
  shipType?: string;

  @IsOptional()
  @IsString()
  vesselName?: string;

  @IsOptional()
  @IsString()
  portOfJoining?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  salary?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  contractDuration?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  requirements?: string[];
}

export class UpdateJobPostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  salary?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  requirements?: string[];
}

export class JobFilterQueryDto {
  @IsOptional()
  @IsEnum(JobType)
  jobType?: JobType;

  @IsOptional()
  @IsString()
  rank?: string;

  @IsOptional()
  @IsString()
  shipType?: string;

  @IsOptional()
  @IsString()
  portOfJoining?: string;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(50)
  limit?: number;
}

export class ApplyToJobDto {
  @IsOptional()
  @IsString()
  coverNote?: string;
}

export class UpdateApplicationStatusDto {
  @IsEnum(['SHORTLISTED', 'INTERVIEW_SCHEDULED', 'SELECTED', 'REJECTED'])
  status: string;
}
