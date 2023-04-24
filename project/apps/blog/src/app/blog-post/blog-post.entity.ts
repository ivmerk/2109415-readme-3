import { PostEntity, Comment, PostType, VideoPostBody, TextPostBody, QuotePostBody, PicturePostBody, LinkPostBody, Favorite} from '@project/shared/app-types';
import { Entity } from '@project/util/util-types';

  export class BlogPostEntity implements Entity<PostEntity>  {
    public id: number;
    public tags: string;
    public postType: PostType;
    public publishAt: Date;
    public createdAt: Date;
    public userId: string;
    public videoPost: VideoPostBody;
    public textPost: TextPostBody;
    public quotePost: QuotePostBody;
    public picturePost: PicturePostBody;
    public linkPost: LinkPostBody;
    public comments: Comment[];
    public favorite: Favorite[];


    constructor(post: PostEntity) {
      this.fillEntity(post);
    }
    public fillEntity(entity: PostEntity): void {
      this.tags= entity.tags;
      this.postType = entity.postType;
      this.videoPost = entity.videoPost;
      this.textPost = entity.textPost;
      this.quotePost = entity.quotePost;
      this.picturePost = entity.picturePost;
      this.linkPost = entity.linkPost;
      this.publishAt = new Date();
      this.userId = entity.userId;
      this.comments = [];
      this.favorite = [];
      this.createdAt = new Date();
    }

    public toObject(): PostEntity {
      return { ...this }
    }
  }
