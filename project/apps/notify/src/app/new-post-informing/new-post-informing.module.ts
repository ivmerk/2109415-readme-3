import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { getRabbitMQOptions } from '@project/util/util-core';
import { NewPostInformingController } from './new-post-informing.controller';
import { NewPostInformingService } from './new-post-informing.service';
import { EmailSubscriberModule } from '../email-subscriber/email-subscriber.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(
      RabbitMQModule,
      getRabbitMQOptions('application.rabbit')
    ),
    EmailSubscriberModule,
    MailModule,
  ],
  controllers: [NewPostInformingController],
  providers: [
    NewPostInformingController,
    NewPostInformingModule,
    NewPostInformingService,
  ],
})
export class NewPostInformingModule {}
