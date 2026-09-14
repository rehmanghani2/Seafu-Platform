import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto, CreateCommentDto, PostFilterQueryDto } from './dto/community.dto';
import { UserRole } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  // ─── Posts ────────────────────────────────────────────────────────────────

  async findAllPosts(query: PostFilterQueryDto) {
    const { category, search, sort = 'newest', page = 1, limit = 20 } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.CommunityPostWhereInput = {};
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const orderBy: Prisma.CommunityPostOrderByWithRelationInput =
      sort === 'top'
        ? { upvotes: 'desc' }
        : sort === 'trending'
        ? { updatedAt: 'desc' }
        : { createdAt: 'desc' };

    const [total, posts] = await Promise.all([
      this.prisma.communityPost.count({ where }),
      this.prisma.communityPost.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          author: {
            select: {
              id: true,
              fullName: true,
              rank: true,
              avatarUrl: true,
              role: true,
              indosNumber: true,
            },
          },
          _count: { select: { comments: true } },
        },
      }),
    ]);

    return {
      data: posts,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOnePost(id: string) {
    const post = await this.prisma.communityPost.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            fullName: true,
            rank: true,
            avatarUrl: true,
            role: true,
            indosNumber: true,
          },
        },
        comments: {
          orderBy: { upvotes: 'desc' },
          include: {
            author: {
              select: { id: true, fullName: true, rank: true, avatarUrl: true, role: true },
            },
          },
        },
        _count: { select: { comments: true } },
      },
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async createPost(dto: CreatePostDto, authorId: string) {
    return this.prisma.communityPost.create({
      data: {
        title: dto.title,
        content: dto.content,
        category: dto.category ?? 'GENERAL',
        authorId,
      },
      include: {
        author: { select: { id: true, fullName: true, rank: true, role: true } },
      },
    });
  }

  async updatePost(id: string, dto: UpdatePostDto, userId: string, userRole: UserRole) {
    const post = await this.prisma.communityPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    if (post.authorId !== userId && userRole !== UserRole.SUPER_ADMIN && userRole !== UserRole.ADMIN) {
      throw new ForbiddenException('You can only edit your own posts');
    }
    return this.prisma.communityPost.update({
      where: { id },
      data: { ...dto },
    });
  }

  async deletePost(id: string, userId: string, userRole: UserRole) {
    const post = await this.prisma.communityPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    if (post.authorId !== userId && userRole !== UserRole.SUPER_ADMIN && userRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.communityPost.delete({ where: { id } });
  }

  async upvotePost(id: string) {
    const post = await this.prisma.communityPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return this.prisma.communityPost.update({
      where: { id },
      data: { upvotes: { increment: 1 } },
    });
  }

  async getMyPosts(authorId: string) {
    return this.prisma.communityPost.findMany({
      where: { authorId },
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { comments: true } } },
    });
  }

  // ─── Comments ─────────────────────────────────────────────────────────────

  async createComment(postId: string, dto: CreateCommentDto, authorId: string) {
    const post = await this.prisma.communityPost.findUnique({ where: { id: postId } });
    if (!post) throw new NotFoundException('Post not found');

    return this.prisma.communityComment.create({
      data: {
        postId,
        authorId,
        content: dto.content,
      },
      include: {
        author: { select: { id: true, fullName: true, rank: true, avatarUrl: true, role: true } },
      },
    });
  }

  async deleteComment(commentId: string, userId: string, userRole: UserRole) {
    const comment = await this.prisma.communityComment.findUnique({ where: { id: commentId } });
    if (!comment) throw new NotFoundException('Comment not found');
    if (comment.authorId !== userId && userRole !== UserRole.SUPER_ADMIN && userRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.communityComment.delete({ where: { id: commentId } });
  }

  async upvoteComment(commentId: string) {
    const comment = await this.prisma.communityComment.findUnique({ where: { id: commentId } });
    if (!comment) throw new NotFoundException('Comment not found');
    return this.prisma.communityComment.update({
      where: { id: commentId },
      data: { upvotes: { increment: 1 } },
    });
  }

  // ─── Stats (sidebar) ──────────────────────────────────────────────────────

  async getStats() {
    const [totalPosts, totalComments, topPost] = await Promise.all([
      this.prisma.communityPost.count(),
      this.prisma.communityComment.count(),
      this.prisma.communityPost.findFirst({
        orderBy: { upvotes: 'desc' },
        select: { id: true, title: true, upvotes: true },
      }),
    ]);
    return { totalPosts, totalComments, topPost };
  }

  async getTrendingPosts() {
    return this.prisma.communityPost.findMany({
      orderBy: { upvotes: 'desc' },
      take: 5,
      include: {
        author: { select: { fullName: true, rank: true } },
        _count: { select: { comments: true } },
      },
    });
  }
}
