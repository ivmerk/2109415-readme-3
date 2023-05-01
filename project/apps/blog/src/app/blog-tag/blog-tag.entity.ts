import { Tag } from "@project/shared/app-types";
import { Entity } from "@project/util/util-types";

export class BlogTagEntity implements Entity<BlogTagEntity>, Tag {
  public id: number;
  public text: string;

  constructor (tag: Tag){
    this.fillEntity(tag);
  }

  public fillEntity(entity: Tag) {
    this.text = entity.text;
    this.id = entity.id;
  }

  public toObject(): BlogTagEntity {
    return {...this};
  }
}
