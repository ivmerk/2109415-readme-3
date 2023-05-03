import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigUsersModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifyModule } from './notify/notify.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';


@Module({
  imports: [
    AuthenticationModule,
    BlogUserModule,
    ConfigUsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    NotifyModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()),
    RefreshTokenModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
