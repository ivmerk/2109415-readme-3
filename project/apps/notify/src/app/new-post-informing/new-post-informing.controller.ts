import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { RabbitRouting } from '@project/shared/app-types';
import { NewPostInformingDto } from './dto/new-post-informing.dto';
import { NewPostInformingService } from './new-post-informing.service';
import { MailService } from '../mail/mail.service';

@Controller()
export class NewPostInformingController {
  constructor(
    private readonly newPostInformingService: NewPostInformingService,
    private readonly mailService: MailService
  ) {}

  @RabbitSubscribe({
    exchange: 'readme.notify',
    routingKey: RabbitRouting.NewPostInforming,
    queue: 'readme.notify',
  })
  public async send(writerAndSuscribers: NewPostInformingDto) {
    const subscribers = await this.newPostInformingService.getSubscribers(
      writerAndSuscribers
    );
    await this.mailService.sendAnounceBySubribers(
      subscribers,
      writerAndSuscribers
    );

    console.log('user=', subscribers, writerAndSuscribers);
  }
}
