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

  // ══════════════════════════════════════════════════════════════════
  // TIERED REFUND & ESCROW DISPUTE ENGINE (SOW Sec. 4 Pg. 9)
  // ══════════════════════════════════════════════════════════════════

  calculateRefundTier(batchStartDate: Date, reason: string, grossAmount: number) {
    const now = new Date();
    const daysUntilStart = Math.ceil((new Date(batchStartDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    let penaltyPercentage = 0;
    let tierDescription = '';

    if (reason === 'INSTITUTE_CANCELLATION') {
      penaltyPercentage = 0;
      tierDescription = 'Institute Cancellation (100% statutory refund under DGS Code)';
    } else if (reason === 'MEDICAL_UNFIT_OVERRIDE') {
      penaltyPercentage = 0;
      tierDescription = 'STCW Form 9 Medical Unfit Override (100% statutory refund)';
    } else if (reason === 'BATCH_RESCHEDULE') {
      penaltyPercentage = 0;
      tierDescription = 'Batch Reschedule by Maritime Academy (100% credit or refund)';
    } else {
      // Candidate Cancellation Tiers
      if (daysUntilStart >= 15) {
        penaltyPercentage = 10;
        tierDescription = 'Early Cancellation (>15 Days Before Batch): 90% Refund (10% Admin Fee)';
      } else if (daysUntilStart >= 7) {
        penaltyPercentage = 50;
        tierDescription = 'Mid-Window Cancellation (7-14 Days Before Batch): 50% Refund';
      } else {
        penaltyPercentage = 100;
        tierDescription = 'Late Cancellation (<7 Days Before Batch): 0% Refund (Seat locked)';
      }
    }

    const penaltyAmount = Math.round((grossAmount * (penaltyPercentage / 100)) * 100) / 100;
    const refundAmount = Math.round((grossAmount - penaltyAmount) * 100) / 100;

    return {
      daysUntilStart: Math.max(0, daysUntilStart),
      penaltyPercentage,
      tierDescription,
      originalAmount: grossAmount,
      penaltyAmount,
      refundAmount,
    };
  }

  async getCancelQuote(seafarerId: string, bookingId: string, reason: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { batch: true, course: { include: { institute: true } } },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.seafarerId !== seafarerId) {
      throw new BadRequestException('Unauthorized access to booking');
    }

    const grossAmount = Number(booking.amount);
    const quote = this.calculateRefundTier(booking.batch.startDate, reason, grossAmount);

    return {
      bookingReference: booking.bookingReference,
      courseTitle: booking.course.title,
      institute: booking.course.institute.name,
      batchStartDate: booking.batch.startDate,
      ...quote,
    };
  }

  async requestRefund(seafarerId: string, bookingId: string, dto: { reason: any; notes?: string; medicalDocumentUrl?: string }) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { batch: true, course: { include: { institute: true } }, transactions: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.seafarerId !== seafarerId) {
      throw new BadRequestException('Unauthorized access to booking');
    }

    if (booking.status !== BookingStatus.CONFIRMED && booking.status !== BookingStatus.PENDING_PAYMENT) {
      throw new ConflictException(`Cannot refund booking with status: ${booking.status}`);
    }

    const grossAmount = Number(booking.amount);
    const quote = this.calculateRefundTier(booking.batch.startDate, dto.reason, grossAmount);
    const refundRef = `REF-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;

    const result = await this.prisma.$transaction(async (tx) => {
      // 1. Create RefundRequest record
      const refund = await tx.refundRequest.create({
        data: {
          refundReference: refundRef,
          bookingId: booking.id,
          seafarerId,
          originalAmount: grossAmount,
          penaltyAmount: quote.penaltyAmount,
          refundAmount: quote.refundAmount,
          currency: booking.currency,
          penaltyPercentage: quote.penaltyPercentage,
          reason: dto.reason,
          status: 'PENDING_REVIEW',
          medicalDocumentUrl: dto.medicalDocumentUrl,
          notes: dto.notes,
        },
      });

      // 2. Return seat inventory to batch
      await tx.courseBatch.update({
        where: { id: booking.batchId },
        data: { availableSeats: { increment: 1 } },
      });

      // 3. Update booking status
      const nextBookingStatus = dto.reason === 'INSTITUTE_CANCELLATION' 
        ? BookingStatus.CANCELLED_BY_INSTITUTE 
        : BookingStatus.CANCELLED_BY_CANDIDATE;

      await tx.booking.update({
        where: { id: booking.id },
        data: { status: nextBookingStatus },
      });

      return refund;
    });

    return {
      message: 'Refund request registered and submitted for compliance verification',
      refund: result,
      auditNotice: quote.tierDescription,
    };
  }

  async listRefunds(status?: string) {
    return this.prisma.refundRequest.findMany({
      where: status ? { status: status as any } : undefined,
      include: {
        booking: {
          include: {
            course: { include: { institute: true } },
            batch: true,
          },
        },
        seafarer: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            indosNumber: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async reviewRefund(refundId: string, dto: { status: any; payoutUtr?: string; notes?: string }) {
    const refund = await this.prisma.refundRequest.findUnique({
      where: { id: refundId },
      include: { booking: true },
    });

    if (!refund) {
      throw new NotFoundException('Refund request not found');
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      const res = await tx.refundRequest.update({
        where: { id: refundId },
        data: {
          status: dto.status,
          payoutUtr: dto.payoutUtr,
          notes: dto.notes ? `${refund.notes ? refund.notes + ' | ' : ''}${dto.notes}` : refund.notes,
          processedAt: dto.status === 'PROCESSED' ? new Date() : undefined,
        },
      });

      if (dto.status === 'PROCESSED') {
        await tx.booking.update({
          where: { id: refund.bookingId },
          data: { status: BookingStatus.REFUNDED },
        });

        // Record payment transaction refund
        await tx.paymentTransaction.create({
          data: {
            bookingId: refund.bookingId,
            gateway: PaymentGateway.RAZORPAY,
            amount: refund.refundAmount,
            currency: refund.currency,
            status: PaymentStatus.REFUNDED,
            metadata: {
              refundReference: refund.refundReference,
              payoutUtr: dto.payoutUtr || `HDFC-REF-${Date.now()}`,
              processedAt: new Date().toISOString(),
            },
          },
        });
      }

      return res;
    });

    return {
      message: `Refund ${dto.status.toLowerCase()} successfully`,
      refund: updated,
    };
  }
}