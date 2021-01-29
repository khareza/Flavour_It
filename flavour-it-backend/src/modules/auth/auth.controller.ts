import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { ApiTagEnum } from 'src/common/enums/api-tag.enum';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LocalAuthGuard } from './guards/local/local.guard';

@ApiTags(ApiTagEnum.AUTH)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginRequestDto })
  async login(@User() req: ITokenPayload): Promise<string> {
    return this.authService.login(req);
  }
}
