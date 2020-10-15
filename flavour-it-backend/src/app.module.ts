import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppConfigModule } from './modules/config/app-config.module';
import { AccountModule } from './modules/account/account.module';
import { EncryptionModule } from './modules/encryption/encryption.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AppConfigModule, AuthModule, AccountModule, EncryptionModule]
})
export class AppModule {}
