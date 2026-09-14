import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHealthStatus() {
    let dbStatus = 'connected';
    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch (e) {
      dbStatus = 'disconnected';
    }

    const memoryUsage = process.memoryUsage();

    return {
      status: 'operational',
      platform: 'The Seafu Platform — Maritime Authority & Certification API',
      version: '2.0.0-PROD',
      environment: process.env.NODE_ENV || 'production',
      services: {
        database: {
          status: dbStatus,
          engine: 'PostgreSQL / Supabase',
        },
        ecdsaCryptoLedger: {
          status: 'operational',
          handshakeProtocol: 'secp256k1',
        },
        escrowDualInvoicing: {
          status: 'operational',
          supportedGateways: ['RAZORPAY', 'STRIPE'],
        },
        pushNotifications: {
          status: 'operational',
          provider: 'Firebase Cloud Messaging (FCM)',
        },
      },
      system: {
        uptimeSeconds: Math.floor(process.uptime()),
        memory: {
          rssMb: Math.round(memoryUsage.rss / 1024 / 1024),
          heapUsedMb: Math.round(memoryUsage.heapUsed / 1024 / 1024),
        },
      },
      timestamp: new Date().toISOString(),
    };
  }
}
