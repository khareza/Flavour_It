import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';
import { AppConfigService } from 'src/modules/config/app-config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly appConfigService: AppConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: appConfigService.ignoreExpiration,
      secretOrKey: appConfigService.secret
    });
  }

  async validate(payload: ITokenPayload): Promise<ITokenPayload> {
    return payload;
  }
}
