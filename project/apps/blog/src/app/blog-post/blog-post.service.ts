import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from '@project/shared/app-types';
import { UpdatePostDto } from './dto/update-post.dto';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostRepository } from './blog-post.repository';
import { PostQuery } from './query/post.query';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
  ) {}

  public async createPost(dto: CreatePostDto): Promise<PostEntity> {
    const postEntity = new BlogPostEntity({ ...dto,  comments: [], favorite: [] });
    return this.blogPostRepository.create(postEntity);
  }

  public async deletePost(id: number): Promise<void> {
    this.blogPostRepository.destroy(id);
  }

  public async getPost(id: number): Promise<PostEntity> {
    return this.blogPostRepository.findById(id);
  }

  public async getPosts(query: PostQuery): Promise<PostEntity[]> {
    return this.blogPostRepository.find(query);
  }

  public async updatePost(_id: number, _dto: UpdatePostDto): Promise<PostEntity> {
    throw new Error('Not implemented…');
  }

}
