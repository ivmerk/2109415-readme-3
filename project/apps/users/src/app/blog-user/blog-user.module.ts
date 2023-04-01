import { Module } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [BlogUserMemoryRepository],
  exports: [BlogUserMemoryRepository]
})

export class BlogUserModule {}
