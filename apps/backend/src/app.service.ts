import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthStatus() {
    return {
      status: 'ok',
      platform: 'The Seafu Platform API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
