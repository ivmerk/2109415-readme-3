import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigNotifyModule } from '@project/config/config-notify';
import { getMongooseOptions } from '@project/util/util-core';
import { EmailSubscriberModule } from './email-subscriber/email-subscriber.module';
import { NewPostInformingModule } from './new-post-informing/new-post-informing.module';

@Module({
  imports: [
    ConfigNotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions('application.db')),
    EmailSubscriberModule,
    NewPostInformingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
