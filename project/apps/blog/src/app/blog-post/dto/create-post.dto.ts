
import { LinkPostBody, PicturePostBody,  PostType, QuotePostBody, TextPostBody, VideoPostBody } from "@project/shared/app-types";

export class CreatePostDto {
  public postType: PostType;
  public videoPost?: VideoPostBody;
  public textPost?: TextPostBody;
  public quotePost?: QuotePostBody;
  public picturePost?: PicturePostBody;
  public linkPost?: LinkPostBody;
  public userId: string;
}
