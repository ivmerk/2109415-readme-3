import { PostType } from "./post-type.enum";

export interface Post {
  _id?: string;
  tag?: string[];
  type: PostType;
}
