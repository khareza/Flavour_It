import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<ITokenPayload | null> {
    const payload = await this.authService.validateUser(email, password);

    if (!payload) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
