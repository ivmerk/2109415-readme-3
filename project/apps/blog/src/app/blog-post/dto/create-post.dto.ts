import { LinkPostBody, PicturePostBody,  PostType, QuotePostBody, TextPostBody, VideoPostBody, postTypes } from "@project/shared/app-types";
import { Type } from "class-transformer";
import { Contains, IsIn, IsMongoId, IsString, IsUrl, MaxLength, MinLength, ValidateNested } from "class-validator";



class VideoPostDto {
  @IsString()
  @MinLength(20)
  @MaxLength(50)
  public title: string;

  @IsString()
  @IsUrl( undefined, { message: 'linkVideo URL is not valid.' })
  @Contains('.youtu')
  public linkVideo: string;

  public postId?: number;
}

export class CreatePostDto {
  @IsIn(postTypes)
  public postType: PostType;

  @ValidateNested()
  @Type(() => VideoPostDto)
  public videoPost?: VideoPostDto;
  public textPost?: TextPostBody;
  public quotePost?: QuotePostBody;
  public picturePost?: PicturePostBody;
  public linkPost?: LinkPostBody;

  @IsString()
  public userId: string;
}
