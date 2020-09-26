import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('offers')
@ApiTags('offers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getHelloWorld')
  getHelloWorld(): string {
    return 'Hello world';
  }
}
