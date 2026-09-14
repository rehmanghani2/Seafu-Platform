import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'seafarer@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterSeafarerDto {
  @ApiProperty({ example: 'seafarer@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Captain John Doe' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiPropertyOptional({ example: '+919876543210' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: '05GL1234' })
  @IsOptional()
  @IsString()
  indosNumber?: string;

  @ApiPropertyOptional({ example: 'MUM123456' })
  @IsOptional()
  @IsString()
  cdcNumber?: string;

  @ApiPropertyOptional({ example: 'Chief Officer' })
  @IsOptional()
  @IsString()
  rank?: string;
}

export class RegisterInstituteDto {
  @ApiProperty({ example: 'admissions@maritimeacademy.edu' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Capt. R. Sharma' })
  @IsString()
  @IsNotEmpty()
  contactPersonName: string;

  @ApiProperty({ example: '+919876543210' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'National Maritime Training Institute' })
  @IsString()
  @IsNotEmpty()
  instituteName: string;

  @ApiProperty({ example: 'DG/TR/2024/098' })
  @IsString()
  @IsNotEmpty()
  dgShippingApprovalNumber: string;

  @ApiProperty({ example: 'Mumbai' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Maharashtra' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: 'Sector 10, Seawoods, Navi Mumbai' })
  @IsString()
  @IsNotEmpty()
  address: string;
}

export class RefreshTokenDto {
  @ApiProperty({ example: 'eyJh...' })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
