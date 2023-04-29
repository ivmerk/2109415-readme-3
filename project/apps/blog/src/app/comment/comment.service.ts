import { Injectable } from "@nestjs/common";
import { CommentRepository } from "./comment.repository";
import { CreateComment } from "./dto/create-comment.dto";
import { Comment } from "@project/shared/app-types";
import { CommentEntity } from "./ comment.entity";
import { UpdateCommmentDto } from "./dto/ update-comment.dto";

@Injectable()
export class CommentService {
  constructor(
  private readonly commentRepository: CommentRepository,
  ){}

  public async createComment (dto: CreateComment): Promise<Comment>{
    const commentEntity = new CommentEntity({...dto})
    return this.commentRepository.create(commentEntity);
  }

  public async deleteComment(id: number): Promise<void> {
    this.commentRepository.destroy(id);
  }

  public async getComment(id: number): Promise<Comment>{
    return this.commentRepository.findById(id);
  }

  public async updateComment (_id: number, _dto: UpdateCommmentDto): Promise<Comment> {
    throw new Error('Not implemented…');
  }
}
