import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class IssueCertificateDto {
  @ApiProperty({ example: 'batch-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  batchId: string;

  @ApiProperty({ example: 'seafarer-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  seafarerId: string;

  @ApiProperty({ example: 'ADVANCED FIRE FIGHTING (AFF)' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '2026-09-26T00:00:00.000Z' })
  @IsDateString()
  issueDate: string;

  @ApiPropertyOptional({ example: '2031-09-25T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @ApiPropertyOptional({ example: 98 })
  @IsOptional()
  @IsNumber()
  cabaScore?: number;

  @ApiPropertyOptional({ example: 'Grade O (Outstanding)' })
  @IsOptional()
  @IsString()
  practicalGrade?: string;
}