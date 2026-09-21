import { Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { ScrapersService } from './scrapers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Automated Maritime Scrapers (Jobs & Webinars)')
@Controller('api/scrapers')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class ScrapersController {
  constructor(private readonly scrapersService: ScrapersService) {}

  @Post('run-pipeline')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Trigger external maritime web scraping pipeline' })
  triggerPipeline() {
    return this.scrapersService.runScraperPipeline();
  }

  @Get('feeds')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.INSTITUTE_ADMIN)
  @ApiOperation({ summary: 'List scraped maritime job and webinar feeds' })
  listFeeds(@Query('status') status?: string, @Query('type') type?: string) {
    return this.scrapersService.listFeeds({ status, type });
  }

  @Post('feeds/:id/approve')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Approve and publish scraped item directly into active listings' })
  approveFeed(@Param('id') id: string) {
    return this.scrapersService.approveAndPublishFeed(id);
  }

  @Post('feeds/:id/reject')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Reject and discard scraped feed' })
  rejectFeed(@Param('id') id: string) {
    return this.scrapersService.rejectFeed(id);
  }
}
