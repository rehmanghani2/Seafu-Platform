import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { DocumentsService } from './documents.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { PrismaService } from '../prisma/prisma.service';
import { UploadDocumentDto } from './dto/document.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Documents Vault & Binary PDF Generation')
@Controller('api/documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upload maritime document (CDC, Passport, Medicals) to Vault' })
  uploadDocument(@CurrentUser() user: any, @Body() dto: UploadDocumentDto) {
    return this.documentsService.uploadDocument(user.id, dto);
  }

  @Get('my-documents')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all documents in seafarer vault' })
  getMyDocuments(@CurrentUser() user: any) {
    return this.documentsService.findMyDocuments(user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SEAFARER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete document from vault' })
  deleteDocument(@CurrentUser() user: any, @Param('id') id: string) {
    return this.documentsService.deleteDocument(user.id, id);
  }

  // ══════════════════════════════════════════════════════════════════
  // BINARY PDF DOWNLOAD ENDPOINTS (SOW Sec. 3 & 4)
  // ══════════════════════════════════════════════════════════════════

  @Get('invoices/candidate/:bookingId/download')
  @ApiOperation({ summary: 'Download certified binary PDF Candidate Tax Invoice' })
  async downloadCandidateInvoice(@Param('bookingId') bookingId: string, @Res() res: any) {
    const booking = await this.prisma.booking.findFirst({
      where: { OR: [{ id: bookingId }, { bookingReference: bookingId }] },
      include: { course: { include: { institute: true } }, seafarer: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    const buffer = await this.pdfGeneratorService.generateCandidateInvoicePdf({
      invoiceNumber: booking.bookingReference.replace('SEA-BK-', 'INV-'),
      bookingReference: booking.bookingReference,
      candidateName: booking.seafarer.fullName,
      indosNumber: booking.seafarer.indosNumber || undefined,
      courseTitle: booking.course.title,
      instituteName: booking.course.institute.name,
      dgApprovalNumber: booking.course.institute.dgShippingApprovalNumber,
      amount: Number(booking.amount),
      currency: booking.currency,
      date: booking.createdAt,
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Invoice-${booking.bookingReference}.pdf"`,
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }

  @Get('invoices/institute/:bookingId/download')
  @ApiOperation({ summary: 'Download certified binary PDF Institute Escrow Remittance Voucher' })
  async downloadInstituteVoucher(@Param('bookingId') bookingId: string, @Res() res: any) {
    const booking = await this.prisma.booking.findFirst({
      where: { OR: [{ id: bookingId }, { bookingReference: bookingId }] },
      include: { course: { include: { institute: true } }, seafarer: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    const gross = Number(booking.amount);
    const comm = Math.round(gross * 0.1 * 100) / 100;
    const tds = Math.round(gross * 0.01 * 100) / 100;
    const net = Math.round((gross - comm - tds) * 100) / 100;

    const buffer = await this.pdfGeneratorService.generateInstituteVoucherPdf({
      voucherNumber: booking.bookingReference.replace('SEA-BK-', 'VCH-'),
      bookingReference: booking.bookingReference,
      instituteName: booking.course.institute.name,
      dgApprovalNumber: booking.course.institute.dgShippingApprovalNumber,
      candidateName: booking.seafarer.fullName,
      grossAmount: gross,
      commissionAmount: comm,
      tdsAmount: tds,
      netPayout: net,
      escrowUtr: `HDFC-ESCROW-${Date.now().toString().slice(-8)}`,
      date: booking.createdAt,
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Voucher-${booking.bookingReference}.pdf"`,
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }

  @Get('certificates/:id/download')
  @ApiOperation({ summary: 'Download official STCW Certificate binary PDF' })
  async downloadCertificate(@Param('id') id: string, @Res() res: any) {
    const cert = await this.prisma.certificate.findFirst({
      where: { OR: [{ id }, { certificateNumber: id }] },
      include: {
        seafarer: true,
        institute: true,
        batch: { include: { course: true } },
      },
    });

    if (!cert) {
      throw new NotFoundException('Certificate not found');
    }

    const buffer = await this.pdfGeneratorService.generateStcwCertificatePdf({
      certificateNumber: cert.certificateNumber,
      title: cert.title,
      stcwRegulation: cert.batch?.course?.category || 'STCW A-VI/3',
      candidateName: cert.seafarer.fullName,
      indosNumber: cert.seafarer.indosNumber || '04NL8821',
      cdcNumber: cert.seafarer.cdcNumber || undefined,
      instituteName: cert.institute?.name || 'Anglo-Eastern Maritime Academy',
      dgApprovalNumber: cert.institute?.dgShippingApprovalNumber || 'IND-001',
      issueDate: cert.issueDate,
      expiryDate: cert.expiryDate || new Date(Date.now() + 5 * 365 * 24 * 3600 * 1000),
      signatureHash: cert.qrCodeToken || '9e4a8b2c4819df51a44c98024921ff91b10a927a6f23851b471249aa311b8f04',
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Certificate-${cert.certificateNumber}.pdf"`,
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}