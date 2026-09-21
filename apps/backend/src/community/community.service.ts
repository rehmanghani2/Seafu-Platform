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

  // ─── Peer Connections (SOW Sec. 4 Pg. 11) ───────────────────────────────────

  async getSuggestedConnections(userId: string) {
    const me = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!me) throw new NotFoundException('User not found');

    // Find existing connections
    const existing = await this.prisma.seafarerConnection.findMany({
      where: { OR: [{ requesterId: userId }, { addresseeId: userId }] },
    });
    const connectedIds = new Set(
      existing.map((c) => (c.requesterId === userId ? c.addresseeId : c.requesterId))
    );
    connectedIds.add(userId);

    // Find suggestions based on rank or institute
    return this.prisma.user.findMany({
      where: {
        id: { notIn: Array.from(connectedIds) },
        role: UserRole.SEAFARER,
      },
      take: 8,
      select: {
        id: true,
        fullName: true,
        rank: true,
        avatarUrl: true,
        indosNumber: true,
        institute: { select: { name: true } },
      },
    });
  }

  async sendConnectionRequest(requesterId: string, addresseeId: string) {
    if (requesterId === addresseeId) {
      throw new ForbiddenException('Cannot connect with yourself');
    }

    const existing = await this.prisma.seafarerConnection.findFirst({
      where: {
        OR: [
          { requesterId, addresseeId },
          { requesterId: addresseeId, addresseeId: requesterId },
        ],
      },
    });

    if (existing) {
      return { message: 'Connection already exists', connection: existing };
    }

    const connection = await this.prisma.seafarerConnection.create({
      data: {
        requesterId,
        addresseeId,
        status: 'PENDING',
      },
      include: {
        addressee: { select: { id: true, fullName: true, rank: true } },
      },
    });

    return { message: 'Connection request dispatched', connection };
  }

  async respondToConnection(userId: string, connectionId: string, action: 'ACCEPT' | 'DECLINE') {
    const connection = await this.prisma.seafarerConnection.findUnique({
      where: { id: connectionId },
    });

    if (!connection) throw new NotFoundException('Connection request not found');
    if (connection.addresseeId !== userId) {
      throw new ForbiddenException('Not authorized to respond to this connection request');
    }

    const updated = await this.prisma.seafarerConnection.update({
      where: { id: connectionId },
      data: { status: action === 'ACCEPT' ? 'ACCEPTED' : 'DECLINED' },
    });

    return { message: `Connection ${action.toLowerCase()}ed`, connection: updated };
  }

  async listMyConnections(userId: string) {
    const [accepted, pendingReceived, pendingSent] = await Promise.all([
      this.prisma.seafarerConnection.findMany({
        where: {
          status: 'ACCEPTED',
          OR: [{ requesterId: userId }, { addresseeId: userId }],
        },
        include: {
          requester: { select: { id: true, fullName: true, rank: true, avatarUrl: true, indosNumber: true } },
          addressee: { select: { id: true, fullName: true, rank: true, avatarUrl: true, indosNumber: true } },
        },
      }),
      this.prisma.seafarerConnection.findMany({
        where: { status: 'PENDING', addresseeId: userId },
        include: {
          requester: { select: { id: true, fullName: true, rank: true, avatarUrl: true, indosNumber: true } },
        },
      }),
      this.prisma.seafarerConnection.findMany({
        where: { status: 'PENDING', requesterId: userId },
        include: {
          addressee: { select: { id: true, fullName: true, rank: true, avatarUrl: true, indosNumber: true } },
        },
      }),
    ]);

    const peerList = accepted.map((c) =>
      c.requesterId === userId ? c.addressee : c.requester
    );

    return {
      peers: peerList,
      pendingRequests: pendingReceived,
      sentRequests: pendingSent,
      totalCount: peerList.length,
    };
  }

  // ─── Maritime 1-on-1 & Group Messaging (SOW Sec. 4 Pg. 11) ─────────────────

  async sendChatMessage(senderId: string, data: { recipientId?: string; roomId?: string; content: string; attachmentUrl?: string }) {
    return this.prisma.chatMessage.create({
      data: {
        senderId,
        recipientId: data.recipientId,
        roomId: data.roomId,
        content: data.content,
        attachmentUrl: data.attachmentUrl,
      },
      include: {
        sender: { select: { id: true, fullName: true, rank: true, avatarUrl: true } },
      },
    });
  }

  async getConversation(userId: string, peerId: string) {
    return this.prisma.chatMessage.findMany({
      where: {
        OR: [
          { senderId: userId, recipientId: peerId },
          { senderId: peerId, recipientId: userId },
        ],
      },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { id: true, fullName: true, rank: true, avatarUrl: true } },
      },
    });
  }

  async markConversationAsRead(userId: string, peerId: string) {
    await this.prisma.chatMessage.updateMany({
      where: {
        senderId: peerId,
        recipientId: userId,
        isRead: false,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });
    return { success: true };
  }
}
