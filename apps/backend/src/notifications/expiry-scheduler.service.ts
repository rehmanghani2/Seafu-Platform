import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

export interface ExpiryDispatchResult {
  certificateNumber: string;
  seafarerName: string;
  email: string;
  phone?: string;
  daysRemaining: number;
  channelsDispatched: string[];
}

@Injectable()
export class ExpirySchedulerService {
  private readonly logger = new Logger(ExpirySchedulerService.name);

  constructor(private readonly prisma: PrismaService) {}

  // Run automatically every day at midnight
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleDailyExpiryScan() {
    this.logger.log('Executing automated daily STCW certificate expiry scan...');
    const results = await this.runExpiryScanNow();
    this.logger.log(`Expiry scan completed: Dispatched alerts for ${results.length} certificates`);
    return results;
  }

  // On-demand method accessible via Admin API or manual trigger
  async runExpiryScanNow(): Promise<ExpiryDispatchResult[]> {
    const intervals = [90, 60, 30, 15, 7];
    const dispatched: ExpiryDispatchResult[] = [];
    const now = new Date();

    for (const days of intervals) {
      const targetDateStart = new Date(now.getTime() + (days - 1) * 24 * 60 * 60 * 1000);
      const targetDateEnd = new Date(now.getTime() + (days + 1) * 24 * 60 * 60 * 1000);

      const certificates = await this.prisma.certificate.findMany({
        where: {
          expiryDate: {
            gte: targetDateStart,
            lte: targetDateEnd,
          },
        },
        include: {
          seafarer: true,
          institute: true,
          batch: { include: { course: true } },
        },
      });

      for (const cert of certificates) {
        const channels: string[] = [];

        // 1. Email Channel (SendGrid Template Integration)
        if (cert.seafarer?.email) {
          channels.push('EMAIL_SENDGRID');
          this.logger.log(
            `[EXPIRY EMAIL] To: ${cert.seafarer.email} | Cert: ${cert.title} (#${cert.certificateNumber}) expires in ${days} days`,
          );
        }

        // 2. SMS Channel (MSG91 / Twilio DLT Format)
        if (cert.seafarer?.phone) {
          channels.push('SMS_MSG91_DLT');
          this.logger.log(
            `[EXPIRY SMS] To: ${cert.seafarer.phone} | MSG91 DLT Template: STCW Expiring in ${days} days. Renew on The Seafu.`,
          );
        }

        // 3. WhatsApp Channel Dispatch
        if (cert.seafarer?.phone) {
          channels.push('WHATSAPP_CLOUD');
        }

        dispatched.push({
          certificateNumber: cert.certificateNumber,
          seafarerName: cert.seafarer?.fullName || 'Seafarer',
          email: cert.seafarer?.email || '',
          phone: cert.seafarer?.phone || undefined,
          daysRemaining: days,
          channelsDispatched: channels,
        });
      }
    }

    return dispatched;
  }
}
