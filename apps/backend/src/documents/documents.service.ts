import { BadRequestException, Injectable } from '@nestjs/common';
import { DocumentVerificationStatus, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UploadDocumentDto } from './dto/document.dto';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadDocument(seafarerId: string, dto: UploadDocumentDto) {
    const allowedMimeTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/webp',
    ];

    if (!allowedMimeTypes.includes(dto.mimeType.toLowerCase())) {
      throw new BadRequestException(
        `Invalid file type: ${dto.mimeType}. Allowed formats: PDF, JPEG, PNG, WebP.`,
      );
    }

    if (dto.fileSize > 15 * 1024 * 1024) {
      throw new BadRequestException('File exceeds the maximum limit of 15MB');
    }

    const doc = await this.prisma.document.create({
      data: {
        seafarerId,
        type: dto.type,
        documentNumber: dto.documentNumber,
        issueDate: dto.issueDate ? new Date(dto.issueDate) : null,
        expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null,
        fileName: dto.fileName,
        fileUrl: dto.fileUrl,
        fileSize: dto.fileSize,
        mimeType: dto.mimeType,
        verificationStatus: DocumentVerificationStatus.VERIFIED, // auto-validated in simulation
      },
    });

    return {
      message: 'Document uploaded to encrypted vault successfully',
      document: doc,
    };
  }

  async findMyDocuments(seafarerId: string) {
    return this.prisma.document.findMany({
      where: { seafarerId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteDocument(seafarerId: string, documentId: string) {
    const doc = await this.prisma.document.findFirst({
      where: { id: documentId, seafarerId },
    });

    if (!doc) {
      throw new BadRequestException('Document not found or access denied');
    }

    await this.prisma.document.delete({
      where: { id: documentId },
    });

    return { message: 'Document removed from vault' };
  }
}