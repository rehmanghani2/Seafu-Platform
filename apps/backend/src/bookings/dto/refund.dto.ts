import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RefundReason } from '@prisma/client';

export class CancelQuoteDto {
  @IsEnum(RefundReason)
  @IsNotEmpty()
  reason: RefundReason;
}

export class RequestRefundDto {
  @IsEnum(RefundReason)
  @IsNotEmpty()
  reason: RefundReason;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  medicalDocumentUrl?: string;
}

export class ReviewRefundDto {
  @IsNotEmpty()
  @IsString()
  status: 'APPROVED' | 'REJECTED' | 'PROCESSED';

  @IsOptional()
  @IsString()
  payoutUtr?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
