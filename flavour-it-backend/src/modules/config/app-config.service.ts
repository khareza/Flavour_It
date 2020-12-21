import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string | undefined {
    return this.configService.get<string>('app.env');
  }
  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
  get secret(): string | undefined {
    return this.configService.get<string>('jwt.secret');
  }
  get signOptions(): string | undefined {
    return this.configService.get<string>('jwt.signOptions');
  }
  get ignoreExpiration(): string | undefined {
    return this.configService.get<string>('jwt.ignoreExpiration');
  }
  get database(): string | undefined {
    return this.configService.get('database');
  }
}
