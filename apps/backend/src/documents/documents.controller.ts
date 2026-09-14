import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { DocumentsService } from './documents.service';
import { UploadDocumentDto } from './dto/document.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Documents Vault')
@Controller('api/documents')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('upload')
  @Roles(UserRole.SEAFARER)
  @ApiOperation({ summary: 'Upload maritime document (CDC, Passport, Medicals) to Vault' })
  uploadDocument(@CurrentUser() user: any, @Body() dto: UploadDocumentDto) {
    return this.documentsService.uploadDocument(user.id, dto);
  }

  @Get('my-documents')
  @Roles(UserRole.SEAFARER)
  @ApiOperation({ summary: 'List all documents in seafarer vault' })
  getMyDocuments(@CurrentUser() user: any) {
    return this.documentsService.findMyDocuments(user.id);
  }

  @Delete(':id')
  @Roles(UserRole.SEAFARER)
  @ApiOperation({ summary: 'Delete document from vault' })
  deleteDocument(@CurrentUser() user: any, @Param('id') id: string) {
    return this.documentsService.deleteDocument(user.id, id);
  }
}