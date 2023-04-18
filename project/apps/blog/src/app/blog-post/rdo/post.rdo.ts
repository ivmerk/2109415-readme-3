import { Favorite, LinkPostBody, PicturePostBody, PostType, QuotePostBody, TextPostBody, VideoPostBody } from '@project/shared/app-types';
import { Expose } from 'class-transformer';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public tag: string;

  @Expose()
  public postType: PostType;

  @Expose()
  public videoPost?: VideoPostBody;

  @Expose()
  public textPost?: TextPostBody;

  @Expose()
  public quotePost?: QuotePostBody;

  @Expose()
  public picturePost?: PicturePostBody;

  @Expose()
  public linkPost?: LinkPostBody;

  @Expose()
  public userId: string;

  @Expose()
  public comments: Comment[];

  @Expose()
  public favorite: Favorite[];
}
