import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendAccountActivationLink(activationHash: string, email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Account Activation',
      template: 'create-account',
      context: {
        code: `${process.env.UI_DOMAIN}/activationKey=${activationHash}&email=${email}`
      }
    });
  }
}
