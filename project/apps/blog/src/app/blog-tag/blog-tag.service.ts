import { Injectable } from "@nestjs/common";
import { BlogTagRepository } from "./blog-tag.repository";

@Injectable()
export class BlogTagService {
 constructor(
  private readonly blogTagRepository: BlogTagRepository
 ) {}

}
