import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AuthModule } from './modules/auth/auth.module';
import { AppConfigModule } from './modules/config/app-config.module';
import { AccountModule } from './modules/account/account.module';
import { EncryptionModule } from './modules/encryption/encryption.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    AccountModule,
    PrismaModule,
    EncryptionModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      },
      defaults: {
        from: `Flavour It <${process.env.EMAIL_USER}>`
      },
      template: {
        dir: process.cwd() + '/src/modules/email-sender/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      },
      options: {
        partials: {
          dir: process.cwd() + '/src/modules/email-sender/templates/',
          options: {
            strict: true
          }
        }
      }
    })
  ]
})
export class AppModule {}
