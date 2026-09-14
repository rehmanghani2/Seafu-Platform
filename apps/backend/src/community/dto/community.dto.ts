import { IsString, IsOptional, IsEnum, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export enum CommunityCategory {
  GENERAL = 'GENERAL',
  STCW_REGULATIONS = 'STCW_REGULATIONS',
  CAREER_PROMOTION = 'CAREER_PROMOTION',
  PSC_INSPECTIONS = 'PSC_INSPECTIONS',
  VESSEL_OPERATIONS = 'VESSEL_OPERATIONS',
  MEDICAL_FITNESS = 'MEDICAL_FITNESS',
  NAVIGATION = 'NAVIGATION',
  ENGINE_ROOM = 'ENGINE_ROOM',
  CONTRACTS_LEGAL = 'CONTRACTS_LEGAL',
  TRAINING_INSTITUTES = 'TRAINING_INSTITUTES',
  ANNOUNCEMENTS = 'ANNOUNCEMENTS',
}

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(300)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  content: string;

  @IsOptional()
  @IsEnum(CommunityCategory)
  category?: CommunityCategory;
}

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(300)
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(20)
  content?: string;

  @IsOptional()
  @IsEnum(CommunityCategory)
  category?: CommunityCategory;
}

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  content: string;
}

export class PostFilterQueryDto {
  @IsOptional()
  @IsEnum(CommunityCategory)
  category?: CommunityCategory;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(['newest', 'top', 'trending'])
  sort?: 'newest' | 'top' | 'trending';

  @IsOptional()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  limit?: number;
}
