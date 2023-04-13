import { Comment } from "./comment.interface";
import { PostType } from "./post-type.enum";
import { User } from "./user.interface";

export interface Post {
  _id?: string,
  tag?: string[],
  type: PostType,
  body: VideoPostBody|TextPostBody|QuotePostBody|PicturePostBody|LinkPostBody,
  publishAt?: Date;
  userId: User,
  comments: Comment[];
  createdAt?: Date;
}


export interface VideoPostBody {
  _id?: string,
  name: string,
  video: string,
}

export interface TextPostBody {
  _id?: string,
  name: string,
  announcement: string,
  text: string,
}

export interface QuotePostBody {
  _id?: string,
  name: string,
  autor: string,
}

export interface PicturePostBody {
  _id?: string,
  picture: string,
}

export interface LinkPostBody {
  _id?: string,
  link: string,
  options?: string,
}

export interface VideoPost extends Post {
  name: string,
  video: string,
}

export interface TextPost extends Post {
  name: string,
  announcement: string,
  text: string,
}

export interface QuotePost extends Post {
  name: string,
  autor: string,
}

export interface PicturePost extends Post {
  picture: string,
}

export interface LinkPost extends Post {
  link: string,
  options?: string,
}
