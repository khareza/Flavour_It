import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppConfigModule } from './modules/config/app-config.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AppConfigModule, AuthModule]
})
export class AppModule {}
