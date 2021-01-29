import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';
import { EncryptionService } from '../encryption/encryption.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private readonly encryptionService: EncryptionService) {}

  async validateUser(email: string, pass: string): Promise<ITokenPayload | null> {
    const user = await this.usersService.findOne(email);

    if (user && this.encryptionService.comparePassword(pass, user.password)) {
      return { userId: user.id, email: user.email };
    }
    return null;
  }

  async login(payload: ITokenPayload): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
