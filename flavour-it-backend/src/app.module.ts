import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AppConfigModule } from './modules/config/app-config.module';
import { AccountModule } from './modules/account/account.module';
import { EncryptionModule } from './modules/encryption/encryption.module';

@Module({
  imports: [AppConfigModule, AuthModule, AccountModule, EncryptionModule]
})
export class AppModule {}
