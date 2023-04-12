import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Comment {
  _id?: string,
  post: Post,
  text: string,
  user: User,
}
