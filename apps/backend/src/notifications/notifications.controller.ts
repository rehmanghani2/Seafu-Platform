import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { ExpirySchedulerService } from './expiry-scheduler.service';
import { RegisterDeviceDto, SendNotificationDto } from './dto/notification.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Push Notifications & Expiry Alerts')
@Controller('api/notifications')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly expirySchedulerService: ExpirySchedulerService,
  ) {}

  @Post('register-device')
  @ApiOperation({ summary: 'Register mobile FCM push notification device token' })
  registerDevice(@CurrentUser() user: any, @Body() dto: RegisterDeviceDto) {
    return this.notificationsService.registerDeviceToken(user.id, dto);
  }

  @Post('send-test')
  @ApiOperation({ summary: 'Send test push notification' })
  sendTestNotification(@Body() dto: SendNotificationDto) {
    return this.notificationsService.sendPushNotification(dto);
  }

  @Get('check-expiries')
  @ApiOperation({ summary: 'Trigger check for expiring certificates' })
  checkExpiries() {
    return this.notificationsService.checkExpiringCertificates();
  }

  @Post('run-expiry-scan')
  @ApiOperation({ summary: 'Execute multi-channel automated expiry alert scan (90/60/30/15/7 days)' })
  runExpiryScan() {
    return this.expirySchedulerService.runExpiryScanNow();
  }
}