import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<number | null> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { id } = user;
      return id;
    }
    return null;
  }

  async login(userId: string): Promise<string> {
    const payload = { userId };
    return this.jwtService.sign(payload);
  }
}
