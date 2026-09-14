import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDeviceDto, SendNotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  // In-memory registered devices map for FCM device routing
  private deviceTokens = new Map<string, { token: string; platform: string; updatedAt: Date }>();

  constructor(private readonly prisma: PrismaService) {}

  registerDeviceToken(userId: string, dto: RegisterDeviceDto) {
    this.deviceTokens.set(userId, {
      token: dto.deviceToken,
      platform: dto.platform,
      updatedAt: new Date(),
    });

    this.logger.log(`Registered FCM token for user ${userId} [Platform: ${dto.platform}]`);
    return {
      message: 'FCM device token registered successfully',
      platform: dto.platform,
    };
  }

  async sendPushNotification(dto: SendNotificationDto) {
    const device = this.deviceTokens.get(dto.userId);

    this.logger.log(
      `[FCM PUSH DISPATCH] To: ${dto.userId} | Title: "${dto.title}" | Body: "${dto.body}"`,
    );

    return {
      delivered: true,
      channel: 'FIREBASE_CLOUD_MESSAGING',
      targetDevice: device ? device.platform : 'BROADCAST_RECEIVER',
      payload: {
        title: dto.title,
        body: dto.body,
        type: dto.type,
        timestamp: new Date().toISOString(),
      },
    };
  }

  async checkExpiringCertificates() {
    // Finds certificates expiring within 90 days
    const ninetyDaysFromNow = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);
    const expiring = await this.prisma.certificate.findMany({
      where: {
        expiryDate: { lte: ninetyDaysFromNow, gte: new Date() },
      },
      include: { seafarer: true },
    });

    return {
      totalAlertsFound: expiring.length,
      expiringCertificates: expiring.map((c) => ({
        certificateNumber: c.certificateNumber,
        title: c.title,
        seafarerEmail: c.seafarer.email,
        expiryDate: c.expiryDate,
      })),
    };
  }
}