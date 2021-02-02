import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailSenderService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendAccountActivationLink(activationHash: string, email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Account Activation',
      template: 'activate-account',
      context: {
        code: `${process.env.UI_DOMAIN}/activationKey=${activationHash}&email=${email}`
      }
    });
  }

  public async sendResetPasswordLink(resetPasswordHash: string, email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Account Activation',
      template: 'reset-password',
      context: {
        code: `${process.env.UI_DOMAIN}/resetPasswordKey=${resetPasswordHash}&email=${email}`
      }
    });
  }

  public async sendChangeEmailActivationLink(changeEmailHash: string, email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Verify your new email address',
      template: 'change-email',
      context: {
        code: `${process.env.UI_DOMAIN}/changeEmailKey=${changeEmailHash}&email=${email}`
      }
    });
  }
}
