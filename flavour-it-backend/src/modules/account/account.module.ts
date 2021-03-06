import { Module } from '@nestjs/common';
import { EmailSenderModule } from '../email-sender/email-sender.module';
import { EncryptionModule } from '../encryption/encryption.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [EncryptionModule, UsersModule, PrismaModule, EmailSenderModule],
  providers: [AccountService],
  controllers: [AccountController]
})
export class AccountModule {}
