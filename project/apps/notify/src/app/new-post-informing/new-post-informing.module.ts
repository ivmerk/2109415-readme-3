import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { getRabbitMQOptions } from '@project/util/util-core';
import { NewPostInformingController } from './new-post-informing.controller';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(
      RabbitMQModule,
      getRabbitMQOptions('application.rabbit')
    ),
  ],
  controllers: [NewPostInformingController],
  providers: [NewPostInformingController, NewPostInformingModule],
})
export class NewPostInformingModule {}
