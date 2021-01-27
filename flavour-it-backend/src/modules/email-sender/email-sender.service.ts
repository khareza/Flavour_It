import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendAccountActivationLink(email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Account Activation',
      template: 'create-account',
      context: {
        //TO DO: generate hash
        code: `${process.env.UI_DOMAIN}/activationKey=cf1a3f828287&email=${email}`
      }
    });
  }
}
