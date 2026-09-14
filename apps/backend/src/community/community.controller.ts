import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import {
  CreatePostDto,
  UpdatePostDto,
  CreateCommentDto,
  PostFilterQueryDto,
} from './dto/community.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Community')
@Controller('api/community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  // ─── Stats & Trending (Public) ────────────────────────────────────────────

  @Get('stats')
  @ApiOperation({ summary: 'Get community stats (post count, comment count, top post)' })
  getStats() {
    return this.communityService.getStats();
  }

  @Get('trending')
  @ApiOperation({ summary: 'Get top 5 trending posts by upvotes' })
  getTrending() {
    return this.communityService.getTrendingPosts();
  }

  // ─── Posts (Public Read) ──────────────────────────────────────────────────

  @Get('posts')
  @ApiOperation({ summary: 'Browse community posts with category/search/sort filters' })
  findAllPosts(@Query() query: PostFilterQueryDto) {
    return this.communityService.findAllPosts(query);
  }

  @Get('posts/my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my posts' })
  getMyPosts(@CurrentUser() user: any) {
    return this.communityService.getMyPosts(user.userId);
  }

  @Get('posts/:id')
  @ApiOperation({ summary: 'Get post detail with all comments' })
  findOnePost(@Param('id') id: string) {
    return this.communityService.findOnePost(id);
  }

  // ─── Post Write (Auth Required) ───────────────────────────────────────────

  @Post('posts')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new community post' })
  createPost(@Body() dto: CreatePostDto, @CurrentUser() user: any) {
    return this.communityService.createPost(dto, user.userId);
  }

  @Patch('posts/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a post (author or admin)' })
  updatePost(
    @Param('id') id: string,
    @Body() dto: UpdatePostDto,
    @CurrentUser() user: any,
  ) {
    return this.communityService.updatePost(id, dto, user.userId, user.role);
  }

  @Delete('posts/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a post (author or admin)' })
  deletePost(@Param('id') id: string, @CurrentUser() user: any) {
    return this.communityService.deletePost(id, user.userId, user.role);
  }

  @Patch('posts/:id/upvote')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upvote a post' })
  upvotePost(@Param('id') id: string) {
    return this.communityService.upvotePost(id);
  }

  // ─── Comments ─────────────────────────────────────────────────────────────

  @Post('posts/:id/comments')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add a comment to a post' })
  createComment(
    @Param('id') postId: string,
    @Body() dto: CreateCommentDto,
    @CurrentUser() user: any,
  ) {
    return this.communityService.createComment(postId, dto, user.userId);
  }

  @Delete('comments/:commentId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a comment (author or admin)' })
  deleteComment(@Param('commentId') commentId: string, @CurrentUser() user: any) {
    return this.communityService.deleteComment(commentId, user.userId, user.role);
  }

  @Patch('comments/:commentId/upvote')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upvote a comment' })
  upvoteComment(@Param('commentId') commentId: string) {
    return this.communityService.upvoteComment(commentId);
  }
}
