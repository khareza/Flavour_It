import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt/jwt.guard';
import { LocalAuthGuard } from './guards/local/local.guard';
import { LoginRequestDto } from './models/login-request.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginRequestDto })
  async login(@Request() req: any): Promise<string> {
    return this.authService.login(req.user);
  }

  @Get('test-auth')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getSecretData(@Request() req: any): Promise<string> {
    return req.user;
  }
}
