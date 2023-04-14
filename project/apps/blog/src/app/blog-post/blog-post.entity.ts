import { Post, Comment, PostType} from '@project/shared/app-types';
import { Entity } from '@project/util/util-types';

  export class BlogPostEntity implements Entity<BlogPostEntity>,  Post {
    public id: string;
    public tag: string[];
    public type: string;
    public body: string;
    public publishAt: Date;
    public userId: string;
    public comments: Comment[];
    public createdAt: Date;

    constructor(post: Post) {
      this.fillEntity(post);
    }
    public fillEntity(entity: Post): void {
      this.tag= [...entity.tag];
      this.type = entity.type;
      this.body = entity.body;
      this.publishAt = new Date();
      this.userId = entity.userId;
      this.comments = [];
      this.createdAt = new Date();
    }

    public toObject(): BlogPostEntity {
      return { ...this }
    }
  }
