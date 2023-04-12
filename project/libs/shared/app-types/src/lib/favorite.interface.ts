import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Favorite{
  _id?: string,
  user: User,
  post: Post,
}
