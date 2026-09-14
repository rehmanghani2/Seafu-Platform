import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  BookingStatus,
  PaymentGateway,
  PaymentStatus,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { LockSeatDto, VerifyPaymentDto } from './dto/booking.dto';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async lockSeat(seafarerId: string, dto: LockSeatDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: seafarerId },
    });

    if (!user) {
      throw new NotFoundException('Seafarer not found');
    }

    const batch = await this.prisma.courseBatch.findUnique({
      where: { id: dto.batchId },
      include: {
        course: {
          include: { institute: true },
        },
      },
    });

    if (!batch) {
      throw new NotFoundException('Batch not found');
    }

    if (batch.availableSeats <= 0) {
      throw new ConflictException('No available seats in this batch');
    }

    // Check existing booking
    const existing = await this.prisma.booking.findFirst({
      where: {
        seafarerId,
        batchId: dto.batchId,
        status: { in: [BookingStatus.CONFIRMED, BookingStatus.PENDING_PAYMENT] },
      },
    });

    if (existing && existing.status === BookingStatus.CONFIRMED) {
      throw new ConflictException('You have already reserved a seat in this batch');
    }

    const bookingRef = `SEA-BK-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Atomic transaction: lock seat & create booking
    const result = await this.prisma.$transaction(async (tx) => {
      await tx.courseBatch.update({
        where: { id: batch.id },
        data: { availableSeats: { decrement: 1 } },
      });

      const booking = await tx.booking.create({
        data: {
          bookingReference: bookingRef,
          seafarerId,
          batchId: batch.id,
          courseId: batch.courseId,
          amount: batch.price,
          currency: 'INR',
          status: BookingStatus.PENDING_PAYMENT,
        },
        include: {
          course: {
            include: { institute: true },
          },
          batch: true,
          seafarer: {
            select: {
              id: true,
              fullName: true,
              email: true,
              indosNumber: true,
              cdcNumber: true,
              rank: true,
            },
          },
        },
      });

      return booking;
    });

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minute lock

    return {
      message: 'Seat quota locked successfully for 10 minutes',
      booking: result,
      expiresAt: expiresAt.toISOString(),
      quotaLockSeconds: 600,
      dualInvoiceSummary: this.calculateDualInvoice(Number(result.amount)),
    };
  }

  async verifyAndConfirmPayment(seafarerId: string, dto: VerifyPaymentDto) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: dto.bookingId },
      include: {
        batch: true,
        course: { include: { institute: true } },
        seafarer: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.seafarerId !== seafarerId) {
      throw new BadRequestException('Booking does not belong to you');
    }

    if (booking.status === BookingStatus.CONFIRMED) {
      return {
        message: 'Booking is already confirmed',
        booking,
      };
    }

    const amount = Number(booking.amount);
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    const studentInvoiceUrl = `/api/invoices/candidate/${invoiceNumber}.pdf`;
    const instituteInvoiceUrl = `/api/invoices/institute/${invoiceNumber}.pdf`;

    const result = await this.prisma.$transaction(async (tx) => {
      // 1. Record payment transaction
      await tx.paymentTransaction.create({
        data: {
          bookingId: booking.id,
          gateway: dto.gateway,
          gatewayPaymentId: dto.paymentId,
          gatewayOrderId: dto.orderId || `order_${dto.paymentId}`,
          amount: booking.amount,
          currency: booking.currency,
          status: PaymentStatus.CAPTURED,
          metadata: {
            verifiedAt: new Date().toISOString(),
            signature: dto.signature || 'SIMULATED_VERIFIED_SIGNATURE',
            escrowUtr: `HDFC${Date.now()}`,
          },
        },
      });

      // 2. Update booking to CONFIRMED with dual invoice URLs
      const updated = await tx.booking.update({
        where: { id: booking.id },
        data: {
          status: BookingStatus.CONFIRMED,
          studentInvoiceUrl,
          instituteInvoiceUrl,
        },
        include: {
          course: { include: { institute: true } },
          batch: true,
          seafarer: {
            select: {
              id: true,
              fullName: true,
              email: true,
              indosNumber: true,
              cdcNumber: true,
              rank: true,
            },
          },
          transactions: true,
        },
      });

      return updated;
    });

    return {
      message: 'Payment verified and seat booking confirmed',
      booking: result,
      dualInvoices: {
        candidateTaxInvoice: {
          invoiceNumber: `CAND-${invoiceNumber}`,
          studentName: booking.seafarer.fullName,
          indosNumber: booking.seafarer.indosNumber,
          course: booking.course.title,
          grossFee: amount,
          baseFee: Math.round((amount / 1.18) * 100) / 100,
          cgst: Math.round((amount - amount / 1.18) / 2 * 100) / 100,
          sgst: Math.round((amount - amount / 1.18) / 2 * 100) / 100,
          totalPaid: amount,
          currency: 'INR',
          url: studentInvoiceUrl,
        },
        instituteEscrowLedger: {
          voucherNumber: `INST-${invoiceNumber}`,
          instituteName: booking.course.institute.name,
          dgApprovalNumber: booking.course.institute.dgShippingApprovalNumber,
          grossCollected: amount,
          platformCommissionRate: '10%',
          platformCommission: Math.round(amount * 0.1 * 100) / 100,
          tdsDeductionRate: '1%',
          tdsDeduction: Math.round(amount * 0.01 * 100) / 100,
          netSettlementPayout: Math.round(amount * 0.89 * 100) / 100,
          escrowUtr: `HDFC${Date.now()}`,
          url: instituteInvoiceUrl,
        },
      },
    };
  }

  calculateDualInvoice(grossAmount: number) {
    const baseFee = Math.round((grossAmount / 1.18) * 100) / 100;
    const gstTotal = Math.round((grossAmount - baseFee) * 100) / 100;
    const cgst = Math.round((gstTotal / 2) * 100) / 100;
    const sgst = Math.round((gstTotal / 2) * 100) / 100;

    const platformCommission = Math.round(grossAmount * 0.1 * 100) / 100;
    const tds = Math.round(grossAmount * 0.01 * 100) / 100;
    const netPayout = Math.round((grossAmount - platformCommission - tds) * 100) / 100;

    return {
      grossAmount,
      candidateBreakdown: {
        baseFee,
        cgst,
        sgst,
        totalPayable: grossAmount,
      },
      instituteEscrowBreakdown: {
        grossCollected: grossAmount,
        commission: platformCommission,
        tds,
        netEscrowPayout: netPayout,
      },
    };
  }

  async findMyBookings(seafarerId: string) {
    return this.prisma.booking.findMany({
      where: { seafarerId },
      include: {
        course: {
          include: { institute: true },
        },
        batch: true,
        transactions: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findInstituteBookings(instituteId: string) {
    return this.prisma.booking.findMany({
      where: {
        course: { instituteId },
      },
      include: {
        course: true,
        batch: true,
        seafarer: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            indosNumber: true,
            cdcNumber: true,
            rank: true,
          },
        },
        transactions: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        course: { include: { institute: true } },
        batch: true,
        seafarer: {
          select: {
            id: true,
            fullName: true,
            email: true,
            indosNumber: true,
            cdcNumber: true,
            rank: true,
          },
        },
        transactions: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }
}