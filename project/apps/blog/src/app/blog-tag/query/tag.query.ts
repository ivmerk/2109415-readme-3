import { IsOptional, IsString } from "class-validator";

export class TagQuery {
  @IsString()
  @IsOptional()
  public tag: string;
}
