import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './app-config.service';
import jwt from '../../config/jwt.default';
import defaultApp from '../../config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [defaultApp, jwt]
    })
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService]
})
export class AppConfigModule {}
