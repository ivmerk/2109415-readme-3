import { Expose } from "class-transformer";

export class TagRdo {
  @Expose()
  tagId: string;

  @Expose()
  text: string;
}
