import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BookingsService - Tiered Statutory Refund Engine', () => {
  let service: BookingsService;

  const mockPrismaService = {
    booking: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    courseBatch: {
      update: jest.fn(),
    },
    refundRequest: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    $transaction: jest.fn((callback) => callback(mockPrismaService)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateRefundTier', () => {
    const grossAmount = 50000;

    it('should grant 90% refund (10% admin penalty) when cancelled >= 15 days before batch start', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 20);

      const quote = service.calculateRefundTier(futureDate, 'PERSONAL_REASON', grossAmount);

      expect(quote.penaltyPercentage).toBe(10);
      expect(quote.refundAmount).toBe(45000);
      expect(quote.penaltyAmount).toBe(5000);
      expect(quote.tierDescription).toContain('>15 Days Before Batch');
    });

    it('should grant 50% refund when cancelled 7 to 14 days before batch start', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 10);

      const quote = service.calculateRefundTier(futureDate, 'SCHEDULE_CONFLICT', grossAmount);

      expect(quote.penaltyPercentage).toBe(50);
      expect(quote.refundAmount).toBe(25000);
      expect(quote.penaltyAmount).toBe(25000);
      expect(quote.tierDescription).toContain('7-14 Days Before Batch');
    });

    it('should grant 0% refund (100% seat lock penalty) when cancelled < 7 days before batch start', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 3);

      const quote = service.calculateRefundTier(futureDate, 'CHANGE_OF_MIND', grossAmount);

      expect(quote.penaltyPercentage).toBe(100);
      expect(quote.refundAmount).toBe(0);
      expect(quote.penaltyAmount).toBe(50000);
      expect(quote.tierDescription).toContain('<7 Days Before Batch');
    });

    it('should grant 100% statutory refund with 0% penalty on INSTITUTE_CANCELLATION', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 2);

      const quote = service.calculateRefundTier(futureDate, 'INSTITUTE_CANCELLATION', grossAmount);

      expect(quote.penaltyPercentage).toBe(0);
      expect(quote.refundAmount).toBe(50000);
      expect(quote.penaltyAmount).toBe(0);
      expect(quote.tierDescription).toContain('Institute Cancellation');
    });

    it('should grant 100% statutory refund with 0% penalty on MEDICAL_UNFIT_OVERRIDE', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);

      const quote = service.calculateRefundTier(futureDate, 'MEDICAL_UNFIT_OVERRIDE', grossAmount);

      expect(quote.penaltyPercentage).toBe(0);
      expect(quote.refundAmount).toBe(50000);
      expect(quote.penaltyAmount).toBe(0);
      expect(quote.tierDescription).toContain('Medical Unfit Override');
    });
  });

  describe('calculateDualInvoice', () => {
    it('should compute correct candidate invoice and academy remittance voucher breakdown', () => {
      const grossAmount = 85000;
      const dualInvoice = service.calculateDualInvoice(grossAmount);

      expect(dualInvoice.grossAmount).toBe(85000);
      expect(dualInvoice.candidateBreakdown.totalPayable).toBe(85000);
      expect(dualInvoice.instituteEscrowBreakdown.commission).toBe(8500); // 10% platform commission
      expect(dualInvoice.instituteEscrowBreakdown.tds).toBe(850); // 1% statutory TDS
      expect(dualInvoice.instituteEscrowBreakdown.netEscrowPayout).toBe(75650); // 85000 - 8500 - 850
    });
  });
});
