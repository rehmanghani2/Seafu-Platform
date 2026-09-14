import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CourseCategory, CourseApprovalStatus } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty({ example: 'Personal Survival Techniques (PST)' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'STCW-PST-01' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    example:
      'Mandatory STCW safety course covering emergency procedures, life jackets, lifeboats, and survival at sea.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: CourseCategory, example: CourseCategory.STCW_BASIC })
  @IsEnum(CourseCategory)
  category: CourseCategory;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isDgApproved?: boolean;

  @ApiProperty({ example: 3 })
  @IsInt()
  @IsPositive()
  durationDays: number;

  @ApiProperty({ example: 4500 })
  @IsNumber()
  @IsPositive()
  basePrice: number;

  @ApiPropertyOptional({ default: 'INR' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ example: ['Valid INDoS number', 'Medical Fitness Certificate'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prerequisites?: string[];

  @ApiPropertyOptional({ example: 'Day 1: Theory of Abandon Ship. Day 2: Pool Drills. Day 3: Exam.' })
  @IsOptional()
  @IsString()
  syllabus?: string;
}

export class CreateBatchDto {
  @ApiProperty({ example: '2026-10-01T09:00:00.000Z' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2026-10-04T17:00:00.000Z' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ example: 24 })
  @IsInt()
  @Min(1)
  totalSeats: number;

  @ApiProperty({ example: 4500 })
  @IsNumber()
  @IsPositive()
  price: number;
}

export class CourseFilterQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: CourseCategory })
  @IsOptional()
  @IsEnum(CourseCategory)
  category?: CourseCategory;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isDgApproved?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;

  @ApiPropertyOptional({ enum: ['price_asc', 'price_desc', 'date_asc', 'popular'] })
  @IsOptional()
  @IsString()
  sortBy?: 'price_asc' | 'price_desc' | 'date_asc' | 'popular';
}
