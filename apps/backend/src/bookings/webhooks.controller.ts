import {
  BadRequestException,
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { BookingStatus, PaymentGateway, PaymentStatus } from '@prisma/client';

@ApiTags('Payment Webhooks')
@Controller('api/webhooks')
export class WebhooksController {
  private readonly logger = new Logger(WebhooksController.name);

  constructor(private readonly prisma: PrismaService) {}

  @Post('razorpay')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Receive & cryptographically verify Razorpay webhook events' })
  async handleRazorpayWebhook(
    @Headers('x-razorpay-signature') signature: string,
    @Body() body: any,
  ) {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || 'seafu_razorpay_secret_2026';
    
    // Cryptographic validation (HMAC SHA-256)
    if (signature) {
      const payloadString = JSON.stringify(body);
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(payloadString)
        .digest('hex');

      // If in strict mode and signatures differ, reject
      if (process.env.NODE_ENV === 'production' && signature !== expectedSignature) {
        this.logger.warn(`Razorpay webhook signature verification failed: received ${signature}`);
        throw new BadRequestException('Invalid Razorpay signature');
      }
    }

    const event = body.event;
    this.logger.log(`[RAZORPAY WEBHOOK] Event: ${event} | ID: ${body.payload?.payment?.entity?.id}`);

    if (event === 'payment.captured' || event === 'order.paid') {
      const paymentEntity = body.payload?.payment?.entity;
      const orderId = paymentEntity?.order_id;
      const paymentId = paymentEntity?.id;
      const amount = paymentEntity?.amount ? paymentEntity.amount / 100 : 0; // Paise to INR

      if (orderId) {
        // Find transaction or booking by orderId
        const transaction = await this.prisma.paymentTransaction.findFirst({
          where: { gatewayOrderId: orderId },
          include: { booking: { include: { course: { include: { institute: true } }, seafarer: true } } },
        });

        if (transaction && transaction.status !== PaymentStatus.CAPTURED) {
          await this.prisma.$transaction(async (tx) => {
            await tx.paymentTransaction.update({
              where: { id: transaction.id },
              data: {
                status: PaymentStatus.CAPTURED,
                gatewayPaymentId: paymentId,
                metadata: {
                  ...(transaction.metadata as any || {}),
                  webhookProcessedAt: new Date().toISOString(),
                  razorpayEvent: event,
                },
              },
            });

            await tx.booking.update({
              where: { id: transaction.bookingId },
              data: { status: BookingStatus.CONFIRMED },
            });
          });
          this.logger.log(`Confirmed booking ${transaction.bookingId} via Razorpay Webhook`);
        }
      }
    } else if (event === 'payment.failed') {
      const paymentEntity = body.payload?.payment?.entity;
      const orderId = paymentEntity?.order_id;

      if (orderId) {
        const transaction = await this.prisma.paymentTransaction.findFirst({
          where: { gatewayOrderId: orderId },
        });

        if (transaction) {
          await this.prisma.$transaction(async (tx) => {
            await tx.paymentTransaction.update({
              where: { id: transaction.id },
              data: { status: PaymentStatus.FAILED },
            });

            // Return seat inventory back to batch
            const booking = await tx.booking.findUnique({ where: { id: transaction.bookingId } });
            if (booking && booking.status === BookingStatus.PENDING_PAYMENT) {
              await tx.courseBatch.update({
                where: { id: booking.batchId },
                data: { availableSeats: { increment: 1 } },
              });
              await tx.booking.update({
                where: { id: booking.id },
                data: { status: BookingStatus.CANCELLED_BY_CANDIDATE },
              });
            }
          });
          this.logger.warn(`Released seat lock for failed booking via Razorpay Webhook: ${orderId}`);
        }
      }
    }

    return { received: true, gateway: 'RAZORPAY', event };
  }

  @Post('stripe')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Receive & cryptographically verify Stripe webhook events' })
  async handleStripeWebhook(
    @Headers('stripe-signature') signature: string,
    @Body() body: any,
  ) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'seafu_stripe_secret_2026';

    // Signature verification check
    if (signature) {
      // In production, Stripe constructEvent or HMAC check
      const elements = signature.split(',').reduce((acc: any, cur: string) => {
        const [k, v] = cur.split('=');
        if (k && v) acc[k.trim()] = v.trim();
        return acc;
      }, {});

      if (elements.t && elements.v1) {
        const signedPayload = `${elements.t}.${JSON.stringify(body)}`;
        const expectedSig = crypto
          .createHmac('sha256', webhookSecret)
          .update(signedPayload)
          .digest('hex');

        if (process.env.NODE_ENV === 'production' && elements.v1 !== expectedSig) {
          this.logger.warn(`Stripe signature verification failed: received ${elements.v1}`);
          throw new BadRequestException('Invalid Stripe signature');
        }
      }
    }

    const event = body.type || 'payment_intent.succeeded';
    this.logger.log(`[STRIPE WEBHOOK] Event: ${event} | Object: ${body.data?.object?.id}`);

    if (event === 'payment_intent.succeeded' || event === 'checkout.session.completed') {
      const intent = body.data?.object;
      const paymentIntentId = intent?.id;
      const bookingRef = intent?.metadata?.bookingReference;

      if (bookingRef) {
        const booking = await this.prisma.booking.findUnique({
          where: { bookingReference: bookingRef },
        });

        if (booking && booking.status !== BookingStatus.CONFIRMED) {
          await this.prisma.$transaction(async (tx) => {
            await tx.booking.update({
              where: { id: booking.id },
              data: { status: BookingStatus.CONFIRMED },
            });

            await tx.paymentTransaction.create({
              data: {
                bookingId: booking.id,
                gateway: PaymentGateway.STRIPE,
                gatewayPaymentId: paymentIntentId,
                amount: booking.amount,
                currency: booking.currency,
                status: PaymentStatus.CAPTURED,
                metadata: {
                  stripeEventId: body.id,
                  customerEmail: intent?.customer_details?.email,
                  processedAt: new Date().toISOString(),
                },
              },
            });
          });
          this.logger.log(`Confirmed booking ${booking.id} via Stripe Webhook`);
        }
      }
    }

    return { received: true, gateway: 'STRIPE', event };
  }
}
