import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { UsersController } from './users.controller';


@Module({
  imports: [],
  controllers: [],
  providers: [
    UsersController,
    BlogController,
  ],
})
export class AppModule {}
