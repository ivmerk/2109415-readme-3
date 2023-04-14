export interface Comment {
  id?: number,
  message: string;
  userId: string;
  postId?: number;
  createdAt: Date;
  updatedAt: Date;
}
