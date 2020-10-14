import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt/jwt.guard';
import { LocalAuthGuard } from './guards/local/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any): Promise<string> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/test-auth')
  async getSecretData(@Request() req: any): Promise<string> {
    return req.user;
  }
}
