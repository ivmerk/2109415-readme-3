import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { BlogPostEntity } from './blog-post.entity';
import { PostEntity } from '@project/shared/app-types';
import { PrismaService } from '../prisma/prisma.service';
import { PostQuery } from './query/post.query';

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogPostEntity, number, PostEntity> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogPostEntity): Promise<PostEntity> {
    const entityData = item.toObject();
    return this.prisma.postEntity.create({
      data: {
        ...entityData,
        videoPost: {
          create: item.videoPost
        },
        textPost: {
          create: item.textPost
        },
        quotePost: {
          create: item.quotePost
        },
        picturePost:{
          create: item.picturePost
        },
        linkPost:{
          create: item.linkPost
        },
        comments:{
          connect:[]
        },
        favorite:{
          connect:[]
        },
        tags:{
          connect: entityData.tags.map(({tagId}) => ({tagId}))
        }
      },
      include:{
        videoPost: true,
        textPost: true,
        quotePost: true,
        picturePost: true,
        linkPost: true,
        comments: true,
        favorite: true,
        tags: true,
      }
    });
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.postEntity.delete({
      where: {
        postId,
      }
    });
  }

  public async findById(postId: number): Promise<PostEntity | null> {
    return this.prisma.postEntity.findFirst({
      where: {
        postId
      },
      include: {
        comments: true,

        favorite: true,
      }
    });
  }

  public find({limit, sortType, page}:PostQuery): Promise<PostEntity[]> {
    if (sortType === 'byComments') {
      return this.prisma.postEntity.findMany({
        take: limit,
      include: {
        comments: true,
        favorite: true,
      },
      orderBy: {
        comments:{
          _count: 'desc'
        }

      },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
    }
    if (sortType === 'byRating') {
      return this.prisma.postEntity.findMany({
        take: limit,
      include: {
        comments: true,
        favorite: true,
      },
      orderBy: {
        favorite:{
          _count: 'desc'
        }

      },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
    }
    return this.prisma.postEntity.findMany({
        take: limit,
      include: {
        comments: true,
        favorite: true,
      },
      orderBy: [{
        publishAt: 'asc'
      }],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public update(_id: number, _item: BlogPostEntity): Promise<PostEntity> {
    return Promise.resolve(undefined);
  }
}
