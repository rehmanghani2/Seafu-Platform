import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDeviceDto {
  @ApiProperty({ example: 'fcm_token_device_unique_string_12345' })
  @IsString()
  @IsNotEmpty()
  deviceToken: string;

  @ApiProperty({ enum: ['ANDROID', 'IOS'], example: 'ANDROID' })
  @IsIn(['ANDROID', 'IOS'])
  platform: 'ANDROID' | 'IOS';
}

export class SendNotificationDto {
  @ApiProperty({ example: 'user-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'STCW Certificate Expiry Reminder' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Your Advanced Fire Fighting certificate expires in 30 days.' })
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ example: 'EXPIRY_ALERT' })
  @IsString()
  @IsNotEmpty()
  type: 'BOOKING' | 'EXPIRY_ALERT' | 'CERTIFICATE';
}