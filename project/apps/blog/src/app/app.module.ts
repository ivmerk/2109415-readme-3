import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BlogPostModule } from './blog-post/blog-post.module';
import { CommentModule } from './comment/comment.module';


@Module({
  imports: [PrismaModule, BlogPostModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
