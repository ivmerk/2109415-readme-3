import { LinkPostBody, PicturePostBody, PostType, QuotePostBody, TextPostBody, VideoPostBody } from "@project/shared/app-types";

export class UpdatePostDto {
  public tag?: string;
  public postType: PostType;
  public videoPost?: VideoPostBody;
  public textPost?: TextPostBody;
  public quotePost?: QuotePostBody;
  public picturePost?: PicturePostBody;
  public linkPost?: LinkPostBody;
}
