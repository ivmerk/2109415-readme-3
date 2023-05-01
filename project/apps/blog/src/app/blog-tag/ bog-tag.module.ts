import { Module } from "@nestjs/common";
import { BlogTagService } from "./blog-tag.service";
import { BlogTagRepository } from "./blog-tag.repository";

@Module({
  imports:[],
  controllers:[],
  providers:[BlogTagService, BlogTagRepository],
  exports:[BlogTagRepository]
})
export class BlogTagModule {}
