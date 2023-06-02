import { Subscriber } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import {
  EMAIL_ADD_SUBSCRIBER_SUBJECT,
  EMAIL_NEW_POSR_SUBJECT,
} from './mail.constant';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.firstname} ${subscriber.lastname}`,
        email: `${subscriber.email}`,
      },
    });
  }

  public async sendAnounceBySubribers(subscribers, writerAndSuscribers) {
    await Promise.all(
      subscribers.map(async (item) => {
        await this.mailerService.sendMail({
          to: item.email,
          subject: EMAIL_NEW_POSR_SUBJECT,
          template: './anounce-subscriber',
          context: {
            userReader: `${item.firstname} ${item.lastname}`,
            email: `${item.email}`,
            writerEmail: `${writerAndSuscribers.email}`,
            userWriter: `${writerAndSuscribers.firstname} ${writerAndSuscribers.lastname}`,
          },
        });
      })
    );
  }
}
