import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksController } from './webhooks.controller';
import { PrismaService } from '../prisma/prisma.service';
import * as crypto from 'crypto';

describe('WebhooksController - Cryptographic Webhook Handlers', () => {
  let controller: WebhooksController;

  const mockPrismaService = {
    paymentTransaction: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    booking: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    courseBatch: {
      update: jest.fn(),
    },
    $transaction: jest.fn((callback) => callback(mockPrismaService)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhooksController],
      providers: [
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<WebhooksController>(WebhooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('handleRazorpayWebhook', () => {
    it('should successfully process a payment.captured event and return received: true', async () => {
      const payload = {
        event: 'payment.captured',
        payload: {
          payment: {
            entity: {
              id: 'pay_99812450',
              order_id: 'order_881920',
              amount: 5000000, // 50,000 INR in paise
              currency: 'INR',
              status: 'captured',
            },
          },
        },
      };

      const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'seafu_razorpay_secret_2026';
      const signature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(payload))
        .digest('hex');

      mockPrismaService.paymentTransaction.findFirst.mockResolvedValue(null);

      const result = await controller.handleRazorpayWebhook(signature, payload);

      expect(result).toBeDefined();
      expect(result.received).toBe(true);
      expect(result.event).toBe('payment.captured');
    });

    it('should process payment.failed event and restore seat quota', async () => {
      const payload = {
        event: 'payment.failed',
        payload: {
          payment: {
            entity: {
              id: 'pay_fail_1122',
              order_id: 'order_fail_99',
            },
          },
        },
      };

      const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'seafu_razorpay_secret_2026';
      const signature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(payload))
        .digest('hex');

      mockPrismaService.paymentTransaction.findFirst.mockResolvedValue({
        id: 'tx-1',
        bookingId: 'bk-1',
      });
      mockPrismaService.booking.findUnique.mockResolvedValue({
        id: 'bk-1',
        batchId: 'batch-1',
        status: 'PENDING_PAYMENT',
      });

      const result = await controller.handleRazorpayWebhook(signature, payload);

      expect(result).toBeDefined();
      expect(result.received).toBe(true);
      expect(mockPrismaService.$transaction).toHaveBeenCalled();
    });
  });

  describe('handleStripeWebhook', () => {
    it('should process payment_intent.succeeded stripe webhook', async () => {
      const payload = {
        type: 'payment_intent.succeeded',
        data: {
          object: {
            id: 'pi_test_39201',
            metadata: {
              orderId: 'order_stripe_01',
            },
          },
        },
      };

      mockPrismaService.paymentTransaction.findFirst.mockResolvedValue(null);

      const result = await controller.handleStripeWebhook('t=1700000000,v1=simulated_sig', payload);

      expect(result).toBeDefined();
      expect(result.received).toBe(true);
      expect(result.event).toBe('payment_intent.succeeded');
    });
  });
});
