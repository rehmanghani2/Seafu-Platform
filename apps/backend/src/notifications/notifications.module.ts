import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ExpirySchedulerService } from './expiry-scheduler.service';
import { NotificationsController } from './notifications.controller';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, ExpirySchedulerService],
  exports: [NotificationsService, ExpirySchedulerService],
})
export class NotificationsModule {}