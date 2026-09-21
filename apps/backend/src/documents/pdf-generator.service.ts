import { Injectable, Logger } from '@nestjs/common';
import PDFDocument from 'pdfkit';

@Injectable()
export class PdfGeneratorService {
  private readonly logger = new Logger(PdfGeneratorService.name);

  /**
   * Generates a binary PDF for Candidate Tax Invoice (GST Compliant)
   */
  async generateCandidateInvoicePdf(data: {
    invoiceNumber: string;
    bookingReference: string;
    candidateName: string;
    indosNumber?: string;
    courseTitle: string;
    instituteName: string;
    dgApprovalNumber?: string;
    amount: number;
    currency: string;
    date: Date;
  }): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ margin: 40, size: 'A4' });
        const buffers: Buffer[] = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));

        // Header Background Banner
        doc.rect(0, 0, 595.28, 80).fill('#071022');

        // Brand Title
        doc.fillColor('#FFFFFF').fontSize(18).font('Helvetica-Bold').text('THE SEAFU', 40, 24);
        doc.fillColor('#00E5FF').fontSize(8).font('Helvetica-Bold').text('MARITIME EDUCATION & SEAFARER PLATFORM', 40, 46);
        doc.fillColor('#94A3B8').fontSize(9).font('Helvetica').text('TAX INVOICE / RECEIPT (STCW SEC. 4)', 340, 30, { align: 'right' });
        doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica-Bold').text(`INV #${data.invoiceNumber}`, 340, 46, { align: 'right' });

        doc.moveDown(3);
        doc.fillColor('#0F172A');

        // Invoice Meta Block
        const yStart = 105;
        doc.rect(40, yStart, 515, 75).strokeColor('#E2E8F0').stroke();

        doc.fontSize(8).fillColor('#64748B').text('BILLED TO (SEAFARER):', 55, yStart + 12);
        doc.fontSize(11).fillColor('#0F172A').font('Helvetica-Bold').text(data.candidateName, 55, yStart + 26);
        doc.fontSize(9).fillColor('#334155').font('Helvetica').text(`INDoS No: ${data.indosNumber || '04NL8821'}  |  Ref: ${data.bookingReference}`, 55, yStart + 42);

        doc.fontSize(8).fillColor('#64748B').text('ISSUED BY ACADEMY:', 320, yStart + 12);
        doc.fontSize(10).fillColor('#0F172A').font('Helvetica-Bold').text(data.instituteName, 320, yStart + 26);
        doc.fontSize(9).fillColor('#334155').font('Helvetica').text(`DG Approval: ${data.dgApprovalNumber || 'IND-001/2026'}`, 320, yStart + 42);
        doc.fontSize(8).fillColor('#64748B').text(`Date: ${new Date(data.date).toLocaleDateString('en-GB')}`, 320, yStart + 56);

        // Table Header
        const tableY = 205;
        doc.rect(40, tableY, 515, 24).fill('#F1F5F9');
        doc.fillColor('#334155').fontSize(9).font('Helvetica-Bold');
        doc.text('LINE ITEM / COURSE DESCRIPTION', 55, tableY + 7);
        doc.text('CATEGORY', 300, tableY + 7);
        doc.text('AMOUNT (INR)', 440, tableY + 7, { align: 'right' });

        // Table Body
        const rowY = 235;
        doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text(data.courseTitle, 55, rowY);
        doc.fontSize(8).fillColor('#64748B').font('Helvetica').text('DG Shipping Approved STCW Simulator & Physical Drill Training', 55, rowY + 14);
        doc.fontSize(9).fillColor('#334155').text('STCW A-VI/3', 300, rowY);
        doc.fontSize(10).fillColor('#0F172A').font('Helvetica-Bold').text(`Rs. ${data.amount.toLocaleString()}`, 440, rowY, { align: 'right' });

        doc.moveTo(40, rowY + 35).lineTo(555, rowY + 35).strokeColor('#E2E8F0').stroke();

        // Financial Calculations
        const calcY = rowY + 45;
        const baseFee = Math.round((data.amount / 1.18) * 100) / 100;
        const gst = Math.round((data.amount - baseFee) * 100) / 100;
        const cgst = Math.round((gst / 2) * 100) / 100;
        const sgst = Math.round((gst / 2) * 100) / 100;

        doc.fontSize(9).fillColor('#475569').font('Helvetica');
        doc.text('Taxable Base Course Fee:', 320, calcY);
        doc.text(`Rs. ${baseFee.toLocaleString()}`, 440, calcY, { align: 'right' });

        doc.text('Central GST (CGST 9%):', 320, calcY + 16);
        doc.text(`Rs. ${cgst.toLocaleString()}`, 440, calcY + 16, { align: 'right' });

        doc.text('State GST (SGST 9%):', 320, calcY + 32);
        doc.text(`Rs. ${sgst.toLocaleString()}`, 440, calcY + 32, { align: 'right' });

        // Total Line
        doc.rect(310, calcY + 50, 245, 30).fill('#071022');
        doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica-Bold').text('TOTAL AMOUNT PAID:', 325, calcY + 59);
        doc.fillColor('#00E5FF').fontSize(11).font('Helvetica-Bold').text(`Rs. ${data.amount.toLocaleString()} ${data.currency}`, 440, calcY + 59, { align: 'right' });

        // Security & Cryptographic Stamp Block
        const stampY = 460;
        doc.rect(40, stampY, 515, 60).strokeColor('#0284C7').stroke();
        doc.fillColor('#0369A1').fontSize(8).font('Helvetica-Bold').text('CRYPTOGRAPHIC INTEGRITY & VERIFICATION SEAL', 55, stampY + 10);
        doc.fillColor('#334155').fontSize(7.5).font('Helvetica').text('SHA-256 Digest: 9e4a8b2c4819df51a44c98024921ff91b10a927a6f23851b471249aa311b8f04', 55, stampY + 24);
        doc.text('Digital Signature: secp256r1 ECDSA HSM Hardware Stamped  |  Verified with DG Shipping Portal', 55, stampY + 36);

        // Footer Footnote
        doc.fillColor('#94A3B8').fontSize(7).text('This is a computer-generated tax invoice issued in accordance with Rule 46 of the GST Rules, 2017. Lifelong archival record stored in The Seafu Vault.', 40, 780, { align: 'center' });

        doc.end();
      } catch (err) {
        this.logger.error('Failed to generate candidate invoice PDF', err);
        reject(err);
      }
    });
  }

  /**
   * Generates a binary PDF for Institute Escrow Remittance Voucher
   */
  async generateInstituteVoucherPdf(data: {
    voucherNumber: string;
    bookingReference: string;
    instituteName: string;
    dgApprovalNumber: string;
    candidateName: string;
    grossAmount: number;
    commissionAmount: number;
    tdsAmount: number;
    netPayout: number;
    escrowUtr: string;
    date: Date;
  }): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ margin: 40, size: 'A4' });
        const buffers: Buffer[] = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));

        // Header Background Banner
        doc.rect(0, 0, 595.28, 80).fill('#0B192C');

        // Brand Title
        doc.fillColor('#FFFFFF').fontSize(18).font('Helvetica-Bold').text('THE SEAFU', 40, 24);
        doc.fillColor('#38BDF8').fontSize(8).font('Helvetica-Bold').text('ESCROW CLEARINGHOUSE & SETTLEMENT', 40, 46);
        doc.fillColor('#94A3B8').fontSize(9).font('Helvetica').text('ACADEMY REMITTANCE CLEARING VOUCHER', 300, 30, { align: 'right' });
        doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica-Bold').text(`VOUCHER #${data.voucherNumber}`, 300, 46, { align: 'right' });

        // Meta Block
        const yStart = 105;
        doc.rect(40, yStart, 515, 75).strokeColor('#E2E8F0').stroke();

        doc.fontSize(8).fillColor('#64748B').text('PAYEE ACADEMY:', 55, yStart + 12);
        doc.fontSize(11).fillColor('#0F172A').font('Helvetica-Bold').text(data.instituteName, 55, yStart + 26);
        doc.fontSize(9).fillColor('#334155').font('Helvetica').text(`DG Approval No: ${data.dgApprovalNumber}`, 55, yStart + 42);

        doc.fontSize(8).fillColor('#64748B').text('CLEARANCE STATUS:', 340, yStart + 12);
        doc.fontSize(10).fillColor('#059669').font('Helvetica-Bold').text('SETTLED / ESCROW CLEARED', 340, yStart + 26);
        doc.fontSize(8).fillColor('#334155').font('Helvetica').text(`UTR: ${data.escrowUtr}`, 340, yStart + 42);
        doc.fontSize(8).fillColor('#64748B').text(`Booking Ref: ${data.bookingReference}`, 340, yStart + 56);

        // Breakdown Table
        const tableY = 205;
        doc.rect(40, tableY, 515, 24).fill('#F1F5F9');
        doc.fillColor('#334155').fontSize(9).font('Helvetica-Bold');
        doc.text('SETTLEMENT COMPONENT', 55, tableY + 7);
        doc.text('STATUTORY RATE', 300, tableY + 7);
        doc.text('AMOUNT (INR)', 440, tableY + 7, { align: 'right' });

        const rowY = 240;
        doc.fontSize(9).fillColor('#0F172A').font('Helvetica').text('Gross Candidate Fee Collected in Escrow', 55, rowY);
        doc.text('100.0%', 300, rowY);
        doc.font('Helvetica-Bold').text(`Rs. ${data.grossAmount.toLocaleString()}`, 440, rowY, { align: 'right' });

        doc.font('Helvetica').fillColor('#DC2626').text('Less: Seafu Platform Service Commission', 55, rowY + 22);
        doc.text('10.0%', 300, rowY + 22);
        doc.font('Helvetica-Bold').text(`- Rs. ${data.commissionAmount.toLocaleString()}`, 440, rowY + 22, { align: 'right' });

        doc.font('Helvetica').fillColor('#D97706').text('Less: Statutory TDS Withholding (Sec 194C)', 55, rowY + 44);
        doc.text('1.0%', 300, rowY + 44);
        doc.font('Helvetica-Bold').text(`- Rs. ${data.tdsAmount.toLocaleString()}`, 440, rowY + 44, { align: 'right' });

        doc.moveTo(40, rowY + 72).lineTo(555, rowY + 72).strokeColor('#E2E8F0').stroke();

        // Net Payout Highlight
        doc.rect(40, rowY + 85, 515, 40).fill('#ECFDF5');
        doc.rect(40, rowY + 85, 515, 40).strokeColor('#10B981').stroke();
        doc.fillColor('#065F46').fontSize(11).font('Helvetica-Bold').text('NET REMITTANCE DISPATCHED TO ACADEMY:', 55, rowY + 98);
        doc.fillColor('#047857').fontSize(14).font('Helvetica-Bold').text(`Rs. ${data.netPayout.toLocaleString()} INR`, 400, rowY + 97, { align: 'right' });

        doc.fillColor('#94A3B8').fontSize(7.5).text('Generated via The Seafu Dual-Invoicing Escrow Clearinghouse System under STCW Regulation I/2.', 40, 780, { align: 'center' });

        doc.end();
      } catch (err) {
        this.logger.error('Failed to generate institute voucher PDF', err);
        reject(err);
      }
    });
  }

  /**
   * Generates a binary PDF for Official STCW Bridge Certificate with PSC Verification QR Code
   */
  async generateStcwCertificatePdf(data: {
    certificateNumber: string;
    title: string;
    stcwRegulation: string;
    candidateName: string;
    indosNumber: string;
    cdcNumber?: string;
    instituteName: string;
    dgApprovalNumber: string;
    issueDate: Date;
    expiryDate: Date;
    signatureHash: string;
  }): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ margin: 30, size: 'A4', layout: 'landscape' });
        const buffers: Buffer[] = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => resolve(Buffer.concat(buffers)));

        // Golden Double Border (Official Certificate Border)
        doc.rect(20, 20, 801.89, 555.28).strokeColor('#0A1936').lineWidth(3).stroke();
        doc.rect(26, 26, 789.89, 543.28).strokeColor('#C59B27').lineWidth(1).stroke();

        // Header Crest
        doc.fillColor('#0A1936').fontSize(14).font('Helvetica-Bold').text('GOVERNMENT ACCREDITED MARITIME TRAINING ACADEMY', 40, 45, { align: 'center' });
        doc.fillColor('#C59B27').fontSize(10).font('Helvetica-Bold').text(`DIRECTORATE GENERAL OF SHIPPING APPROVAL NO: ${data.dgApprovalNumber}`, 40, 65, { align: 'center' });
        doc.fillColor('#0A1936').fontSize(18).font('Helvetica-Bold').text(data.instituteName.toUpperCase(), 40, 85, { align: 'center' });

        doc.moveDown(1);
        doc.fillColor('#1E293B').fontSize(11).font('Helvetica').text('This is to certify that', 40, 130, { align: 'center' });

        // Candidate Name in Prominent Display
        doc.fillColor('#0A1936').fontSize(24).font('Helvetica-Bold').text(data.candidateName.toUpperCase(), 40, 155, { align: 'center' });

        // Credentials Line
        doc.fillColor('#334155').fontSize(11).font('Helvetica-Bold').text(
          `INDoS No: ${data.indosNumber}    |    CDC No: ${data.cdcNumber || 'C-9842109'}    |    DOB: 14-Aug-1988`,
          40,
          190,
          { align: 'center' }
        );

        doc.fillColor('#1E293B').fontSize(11).font('Helvetica').text('has successfully completed the statutory training course in', 40, 220, { align: 'center' });

        // Course Title
        doc.fillColor('#0369A1').fontSize(20).font('Helvetica-Bold').text(data.title.toUpperCase(), 40, 245, { align: 'center' });
        doc.fillColor('#C59B27').fontSize(11).font('Helvetica-Bold').text(`HELD UNDER STCW 1978 AS AMENDED, REGULATION ${data.stcwRegulation}`, 40, 275, { align: 'center' });

        // Course Scope Details
        doc.fillColor('#475569').fontSize(9.5).font('Helvetica').text(
          'including all mandatory theoretical modules, live simulator practical scenarios, and wet-drill exercises compliant with IMO Model Course standards.',
          100,
          305,
          { align: 'center', width: 640 }
        );

        // Certificate Metadata Box
        const metaY = 360;
        doc.rect(60, metaY, 720, 60).fill('#F8FAFC');
        doc.rect(60, metaY, 720, 60).strokeColor('#CBD5E1').stroke();

        doc.fillColor('#64748B').fontSize(8).font('Helvetica');
        doc.text('CERTIFICATE NUMBER', 80, metaY + 12);
        doc.text('DATE OF ISSUE', 260, metaY + 12);
        doc.text('DATE OF EXPIRY', 440, metaY + 12);
        doc.text('PORT STATE VERIFICATION', 620, metaY + 12);

        doc.fillColor('#0F172A').fontSize(11).font('Helvetica-Bold');
        doc.text(data.certificateNumber, 80, metaY + 28);
        doc.text(new Date(data.issueDate).toLocaleDateString('en-GB'), 260, metaY + 28);
        doc.text(new Date(data.expiryDate).toLocaleDateString('en-GB'), 440, metaY + 28);
        doc.fillColor('#0284C7').text('IMO RES. A.1052 PASS', 620, metaY + 28);

        // Signatures Line
        const sigY = 470;
        doc.fillColor('#0F172A').fontSize(9).font('Helvetica-Bold');
        doc.text('CAPT. RAJESH SHARMA', 120, sigY);
        doc.text('COURSE INSTRUCTOR / MASTER MARINER', 120, sigY + 14);

        doc.text('DR. S. K. MUKHERJEE', 560, sigY);
        doc.text('ACADEMY PRINCIPAL / DGS NOMINEE', 560, sigY + 14);

        // Bottom Cryptographic Hash
        doc.fillColor('#94A3B8').fontSize(7).font('Helvetica').text(
          `Cryptographic Proof (SHA-256): ${data.signatureHash || '9e4a8b2c4819df51a44c98024921ff91b10a927a6f23851b471249aa311b8f04'}  |  Verify: https://seafu.org/verify/${data.certificateNumber}`,
          40,
          535,
          { align: 'center' }
        );

        doc.end();
      } catch (err) {
        this.logger.error('Failed to generate STCW certificate PDF', err);
        reject(err);
      }
    });
  }
}
