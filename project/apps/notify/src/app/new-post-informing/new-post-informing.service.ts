import { Injectable } from '@nestjs/common';
import { NewPostInformingDto } from './dto/new-post-informing.dto';
import { EmailSubscriberRepository } from '../email-subscriber/email-subscriber.repository';
import { CreateSubscriberDto } from '../email-subscriber/dto/create-subscriber.dto';

@Injectable()
export class NewPostInformingService {
  constructor(
    private readonly emailSubscriberRepository: EmailSubscriberRepository
  ) {}
  public async getSubscribers(
    writerAndSuscribers: NewPostInformingDto
  ): Promise<CreateSubscriberDto[] | null> {
    const { mySubscribers } = writerAndSuscribers;
    const subscribersNames: CreateSubscriberDto[] = [];

    await Promise.all(
      mySubscribers.map(async (mail) => {
        const { email, firstname, lastname } =
          await this.emailSubscriberRepository.findByEmail(mail);
        const subscriber = { email, firstname, lastname };
        subscribersNames.push(subscriber);
      })
    );

    console.log('subscribersName_', subscribersNames);
    return subscribersNames;
  }

  public async getWriterName(writerAndSuscribers: NewPostInformingDto) {
    const { email } = writerAndSuscribers;
    const user = await this.emailSubscriberRepository.findByEmail(email);
    const { firstname, lastname } = user;
    return { firstname, lastname };
  }
}
