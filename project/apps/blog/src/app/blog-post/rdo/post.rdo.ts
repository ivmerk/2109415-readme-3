import { Expose } from 'class-transformer';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public tag: string[];

  @Expose()
  public type: string;

  @Expose()
  public body: string;

  @Expose()
  public userId: string;

  @Expose()
  public comments: Comment[];
}
