import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { RabbitRouting } from '@project/shared/app-types';
import { NewPostInformingDto } from './dto/new-post-informing.dto';

@Controller()
export class NewPostInformingController {
  @RabbitSubscribe({
    exchange: 'readme.notify',
    routingKey: RabbitRouting.NewPostInforming,
    queue: 'readme.notify',
  })
  public async send(writerAndSuscribers: NewPostInformingDto) {
    console.log(writerAndSuscribers);
  }
}
