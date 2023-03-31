import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [BlogUserModule, AuthenticationModule, ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
