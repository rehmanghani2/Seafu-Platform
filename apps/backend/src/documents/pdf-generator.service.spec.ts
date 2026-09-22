import { Test, TestingModule } from '@nestjs/testing';
import { PdfGeneratorService } from './pdf-generator.service';

describe('PdfGeneratorService - Binary PDF/A Engine', () => {
  let service: PdfGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfGeneratorService],
    }).compile();

    service = module.get<PdfGeneratorService>(PdfGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateCandidateInvoicePdf', () => {
    it('should generate a valid PDF binary buffer for candidate tax invoice', async () => {
      const buffer = await service.generateCandidateInvoicePdf({
        invoiceNumber: 'INV-2026-9901',
        bookingReference: 'BK-AFF-1092',
        candidateName: 'Capt. Siddharth Rao',
        indosNumber: '09ZM8123',
        courseTitle: 'Advanced Fire Fighting (AFF) Refresher',
        instituteName: 'Anglo-Eastern Maritime Academy',
        dgApprovalNumber: 'IND-AEMA-04',
        amount: 35000,
        currency: 'INR',
        date: new Date(),
      });

      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(1000);
      // Valid PDF files start with %PDF-
      const header = buffer.subarray(0, 5).toString('utf-8');
      expect(header).toBe('%PDF-');
    });
  });

  describe('generateInstituteVoucherPdf', () => {
    it('should generate a valid PDF binary buffer for academy escrow clearing voucher', async () => {
      const buffer = await service.generateInstituteVoucherPdf({
        voucherNumber: 'VCH-2026-8812',
        bookingReference: 'BK-AFF-1092',
        instituteName: 'Anglo-Eastern Maritime Academy',
        dgApprovalNumber: 'IND-AEMA-04',
        candidateName: 'Capt. Siddharth Rao',
        grossAmount: 35000,
        commissionAmount: 3500,
        tdsAmount: 350,
        netPayout: 31150,
        escrowUtr: 'HDFC99812401',
        date: new Date(),
      });

      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(1000);
      const header = buffer.subarray(0, 5).toString('utf-8');
      expect(header).toBe('%PDF-');
    });
  });

  describe('generateStcwCertificatePdf', () => {
    it('should generate a landscape STCW certificate with verification token and signature digest', async () => {
      const buffer = await service.generateStcwCertificatePdf({
        certificateNumber: 'CERT-2026-STCW-4412',
        title: 'Dynamic Positioning Operator (DP-2) Advanced Simulator',
        stcwRegulation: 'Regulation II/2 & IMO Model Course 1.27',
        candidateName: 'Neil D’Souza',
        indosNumber: '11DP5529',
        cdcNumber: 'MUM-998124',
        instituteName: 'HIMT Chennai Post Sea Campus',
        dgApprovalNumber: 'IND-HIMT-01',
        issueDate: new Date(),
        expiryDate: new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000),
        signatureHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      });

      expect(buffer).toBeInstanceOf(Buffer);
      expect(buffer.length).toBeGreaterThan(1000);
      const header = buffer.subarray(0, 5).toString('utf-8');
      expect(header).toBe('%PDF-');
    });
  });
});
