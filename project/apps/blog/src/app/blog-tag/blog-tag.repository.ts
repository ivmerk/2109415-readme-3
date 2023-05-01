import { Injectable } from "@nestjs/common";
import { BlogTagEntity } from "./blog-tag.entity";
import { CRUDRepository } from "@project/util/util-types";
import { Tag } from "@project/shared/app-types";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BlogTagRepository implements CRUDRepository<BlogTagEntity, number, Tag> {
  constructor(private readonly pisma: PrismaService) {}

  public async create(item: BlogTagEntity): Promise<Tag> {
    const entityData = item.toObject();
      return this.pisma.tag.create({
        data:{
          id: entityData.id,
          text: entityData.text
        }
      });
  }

  public async destroy(id: number): Promise<void> {
      await this.pisma.tag.delete({
        where: {
          id,
        }
      });
  }

  public async findById(id: number): Promise<Tag> | null {
      return this.pisma.tag.findFirst({
        where:{
          id,
        }
      })
  }

  public async findByTag( text: string):Promise<Tag> | null{
    return this.pisma.tag.findFirst({
      where:{
        text,
      }
    })
  }

  public async update(id: number, item: BlogTagEntity): Promise<Tag> {
      return Promise.resolve(undefined)
  }
}
