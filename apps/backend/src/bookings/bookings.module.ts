import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { WebhooksController } from './webhooks.controller';

@Module({
  controllers: [BookingsController, WebhooksController],
  providers: [BookingsService],
  exports: [BookingsService],
})
export class BookingsModule {}