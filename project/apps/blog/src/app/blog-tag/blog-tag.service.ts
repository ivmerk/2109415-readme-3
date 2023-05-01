import { Injectable } from "@nestjs/common";
import { BlogTagRepository } from "./blog-tag.repository";
import { CreateTagDto } from "./dto/create-tag.dto";
import { Tag } from "@project/shared/app-types";
import { BlogTagEntity } from "./blog-tag.entity";

@Injectable()
export class BlogTagService {
 constructor(
  private readonly blogTagRepository: BlogTagRepository
 ) {}


 async createTag(dto: CreateTagDto): Promise<Tag> {
  const tagEntity = new BlogTagEntity(dto);
  return this.blogTagRepository.create(tagEntity);
 }


}
