import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaymentGateway } from '@prisma/client';

export class LockSeatDto {
  @ApiProperty({ example: 'batch-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  batchId: string;
}

export class VerifyPaymentDto {
  @ApiProperty({ example: 'booking-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ enum: PaymentGateway, example: PaymentGateway.RAZORPAY })
  @IsEnum(PaymentGateway)
  gateway: PaymentGateway;

  @ApiProperty({ example: 'pay_Nz123456789' })
  @IsString()
  @IsNotEmpty()
  paymentId: string;

  @ApiPropertyOptional({ example: 'order_Nz123456789' })
  @IsOptional()
  @IsString()
  orderId?: string;

  @ApiPropertyOptional({ example: 'signature_hash_12345' })
  @IsOptional()
  @IsString()
  signature?: string;
}

export class ApplyCouponDto {
  @ApiProperty({ example: 'WOMENSEAFARER' })
  @IsString()
  @IsNotEmpty()
  couponCode: string;

  @ApiProperty({ example: 'batch-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  batchId: string;
}