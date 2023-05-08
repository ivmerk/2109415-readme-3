import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { COMMENT_MESSAGE_LENGTH } from "../comment.constant";

export class UpdateCommmentDto {


  @IsNotEmpty()
  @IsNumber()
  public id: number;

  @IsString()
  @MinLength(COMMENT_MESSAGE_LENGTH.Min)
  @MaxLength(COMMENT_MESSAGE_LENGTH.Max)
  public massage: string;
}
