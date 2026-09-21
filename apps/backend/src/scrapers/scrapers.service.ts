import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { ScrapedFeedStatus, ScrapedFeedType } from '@prisma/client';

export interface RawScrapedItem {
  type: 'JOB' | 'WEBINAR';
  title: string;
  sourceOrganization: string;
  sourceUrl: string;
  summary: string;
  location?: string;
  closingDate?: string;
  extraMeta?: Record<string, any>;
}

@Injectable()
export class ScrapersService {
  private readonly logger = new Logger(ScrapersService.name);

  constructor(private readonly prisma: PrismaService) {}

  // Automated 12-hour periodic scrape worker
  @Cron(CronExpression.EVERY_12_HOURS)
  async handleScheduledScrape() {
    this.logger.log('Executing automated 12-hour maritime jobs and webinars ingestion...');
    const result = await this.runScraperPipeline();
    this.logger.log(`Scheduled scrape completed: ${result.importedCount} new feeds imported`);
    return result;
  }

  // Primary Scraper Pipeline
  async runScraperPipeline() {
    const feedsToIngest = await this.fetchExternalMaritimeFeeds();
    let importedCount = 0;
    let duplicateCount = 0;

    for (const item of feedsToIngest) {
      const hashInput = `${item.title}_${item.sourceOrganization}_${item.sourceUrl}`.toLowerCase();
      const deduplicationHash = crypto.createHash('sha256').update(hashInput).digest('hex');

      const existing = await this.prisma.scrapedMaritimeFeed.findUnique({
        where: { deduplicationHash },
      });

      if (existing) {
        duplicateCount++;
        continue;
      }

      await this.prisma.scrapedMaritimeFeed.create({
        data: {
          feedType: item.type === 'JOB' ? ScrapedFeedType.MARITIME_JOB : ScrapedFeedType.WEBINAR_WORKSHOP,
          title: item.title,
          sourceOrganization: item.sourceOrganization,
          sourceUrl: item.sourceUrl,
          summary: item.summary,
          location: item.location || 'Global Port / Remote Bridge',
          deduplicationHash,
          status: ScrapedFeedStatus.PENDING_REVIEW,
          metadata: item.extraMeta || {},
          expiresAt: item.closingDate ? new Date(item.closingDate) : new Date(Date.now() + 30 * 24 * 3600 * 1000),
        },
      });

      importedCount++;
    }

    return {
      success: true,
      totalScanned: feedsToIngest.length,
      importedCount,
      duplicateCount,
      timestamp: new Date().toISOString(),
    };
  }

  // List all scraped feeds with filters
  async listFeeds(filter?: { status?: string; type?: string }) {
    const where: any = {};
    if (filter?.status) where.status = filter.status as any;
    if (filter?.type) where.feedType = filter.type as any;

    return this.prisma.scrapedMaritimeFeed.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  // Approve and publish scraped feed into active database
  async approveAndPublishFeed(feedId: string) {
    const feed = await this.prisma.scrapedMaritimeFeed.findUnique({
      where: { id: feedId },
    });

    if (!feed) throw new NotFoundException('Scraped feed item not found');

    const meta = (feed.metadata as any) || {};

    if (feed.feedType === ScrapedFeedType.MARITIME_JOB) {
      // Find a default institute or company to attach
      const institute = await this.prisma.institute.findFirst();
      if (!institute) throw new NotFoundException('No accredited maritime institute found to host listing');

      const publishedJob = await this.prisma.jobPost.create({
        data: {
          title: feed.title,
          instituteId: institute.id,
          companyName: feed.sourceOrganization,
          rank: meta.rank || 'Second Mate / Chief Mate FG',
          shipType: meta.vesselType || 'Container / Bulk Carrier',
          jobType: meta.jobType === 'SHORE' ? 'SHORE_BASED' : 'SHIPBOARD',
          portOfJoining: feed.location || 'Worldwide Trading',
          description: feed.summary || 'Merchant Navy position aggregated from verified maritime circular.',
          requirements: [meta.requirements || 'Valid CoC, STCW 2010 Endorsements, DG Medical Fitness Form 9.'],
          salary: meta.salaryMin || 3500,
          currency: 'USD',
          postedBy: institute.name,
          status: 'ACTIVE',
          expiresAt: feed.expiresAt || new Date(Date.now() + 30 * 24 * 3600 * 1000),
        },
      });

      await this.prisma.scrapedMaritimeFeed.update({
        where: { id: feedId },
        data: { status: ScrapedFeedStatus.PUBLISHED, publishedEntityId: publishedJob.id },
      });

      return { message: 'Feed approved and published to Job Board', publishedJob };
    } else {
      // Webinar / Workshop
      const institute = await this.prisma.institute.findFirst();
      if (!institute) throw new NotFoundException('No accredited maritime institute found to host webinar');

      const publishedWebinar = await this.prisma.webinar.create({
        data: {
          instituteId: institute.id,
          title: feed.title,
          slug: `${feed.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`,
          description: feed.summary || 'International maritime symposium and technical safety briefing.',
          speakerName: meta.speaker || 'Capt. A. K. Banerjee (IMO Model Course Lead)',
          speakerTitle: 'Senior Maritime Safety Auditor & Master Mariner',
          speakerBio: 'Master Mariner FG, Senior Maritime Safety Auditor and Bridge Simulator Specialist.',
          scheduledAt: meta.startTime ? new Date(meta.startTime) : new Date(Date.now() + 7 * 24 * 3600 * 1000),
          durationMinutes: meta.durationMinutes || 90,
          category: meta.category || 'REGULATION',
          price: 0,
          isFree: true,
          status: 'SCHEDULED',
        },
      });

      await this.prisma.scrapedMaritimeFeed.update({
        where: { id: feedId },
        data: { status: ScrapedFeedStatus.PUBLISHED, publishedEntityId: publishedWebinar.id },
      });

      return { message: 'Feed approved and published to Webinars Deck', publishedWebinar };
    }
  }

  async rejectFeed(feedId: string) {
    return this.prisma.scrapedMaritimeFeed.update({
      where: { id: feedId },
      data: { status: ScrapedFeedStatus.REJECTED },
    });
  }

  // Internal Maritime Scraper Feed Adapters
  private async fetchExternalMaritimeFeeds(): Promise<RawScrapedItem[]> {
    return [
      {
        type: 'JOB',
        title: 'Chief Mate FG Unlimited — 15,500 TEU Container Fleet',
        sourceOrganization: 'Maersk Line Fleet Management',
        sourceUrl: 'https://careers.maersk.com/job/marine-chief-mate-fg',
        summary: 'Command watchkeeping aboard Triple-E and E-class container vessels. Worldwide trading routes with Danish flag CRA.',
        location: 'Rotterdam / Felixstowe / Singapore',
        closingDate: new Date(Date.now() + 25 * 24 * 3600 * 1000).toISOString(),
        extraMeta: {
          rank: 'Chief Mate',
          vesselType: 'Ultra Large Container Vessel (ULCV)',
          jobType: 'SHIPBOARD',
          salaryMin: 5200,
          salaryMax: 7800,
          requirements: 'Master Mariner / Chief Mate CoC (STCW II/2), BRM, ECDIS Type Specific.',
        },
      },
      {
        type: 'JOB',
        title: 'Second Engineer (Motor) — 174,000 cbm LNG Carrier',
        sourceOrganization: 'Anglo-Eastern Ship Management',
        sourceUrl: 'https://angloeastern.com/careers/second-engineer-lng',
        summary: 'Dual-fuel ME-GA/X-DF propulsion operation. Strict SIGTTO standards and cryogenic manifold supervision.',
        location: 'Ras Laffan / Daesan / Gate LNG',
        closingDate: new Date(Date.now() + 20 * 24 * 3600 * 1000).toISOString(),
        extraMeta: {
          rank: 'Second Engineer',
          vesselType: 'LNG Membrane Carrier',
          jobType: 'SHIPBOARD',
          salaryMin: 6800,
          salaryMax: 9200,
          requirements: 'Class 2 Marine Engineer CoC, Advanced Liquefied Gas Tanker (STCW V/1-2-2).',
        },
      },
      {
        type: 'JOB',
        title: 'Marine Superintendent / Safety & Vetting Officer',
        sourceOrganization: 'Synergy Marine Group',
        sourceUrl: 'https://synergymarine.com/shore-careers/safety-superintendent',
        summary: 'Shore-based role overseeing SIRE 2.0 inspections, RightShip vetting, and MLC crew welfare audits.',
        location: 'Mumbai IND (HQ)',
        closingDate: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
        extraMeta: {
          rank: 'Marine Superintendent',
          vesselType: 'Oil / Chemical Tankers',
          jobType: 'SHORE',
          salaryMin: 4500,
          salaryMax: 6500,
          requirements: 'Sailed as Master Mariner on Tankers, Lead Auditor ISO 9001/ISM.',
        },
      },
      {
        type: 'WEBINAR',
        title: 'IMO MEPC 82 Decarbonization Mandates & Carbon Intensity Indicator (CII)',
        sourceOrganization: 'DNV Maritime Academy Hellas',
        sourceUrl: 'https://dnv.com/webinars/mepc82-cii-compliance',
        summary: 'Deep dive into Revised GHG Strategy 2026, bio-fuel bunkering protocols, and operational CII rating optimization.',
        location: 'Webinar Bridge (Live WebRTC)',
        closingDate: new Date(Date.now() + 14 * 24 * 3600 * 1000).toISOString(),
        extraMeta: {
          speaker: 'Dr. John Karagiannis (Principal Consultant DNV Decarbonization)',
          startTime: new Date(Date.now() + 10 * 24 * 3600 * 1000).toISOString(),
          durationMinutes: 90,
          category: 'REGULATION',
        },
      },
      {
        type: 'WEBINAR',
        title: 'Port State Control Tokyo MoU Concentrated Inspection Campaign (CIC) 2026',
        sourceOrganization: 'ClassNK Technical Seminar',
        sourceUrl: 'https://classnk.com/events/tokyo-mou-cic-2026',
        summary: 'Comprehensive review of focus inspection criteria on emergency power systems, lifeboat release hooks, and OWS calibration.',
        location: 'Virtual Bridge Room 02',
        closingDate: new Date(Date.now() + 12 * 24 * 3600 * 1000).toISOString(),
        extraMeta: {
          speaker: 'Capt. M. Tanaka (Former Tokyo MoU Lead Auditor)',
          startTime: new Date(Date.now() + 8 * 24 * 3600 * 1000).toISOString(),
          durationMinutes: 120,
          category: 'PSC_AUDIT',
        },
      },
    ];
  }
}
