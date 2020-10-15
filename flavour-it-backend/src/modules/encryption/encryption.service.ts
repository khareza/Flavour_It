import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private hashSalt = 10;

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.hashSalt);
  }

  async comparePassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async generateRandomHashCode(codeSize = 20): Promise<string> {
    return crypto.randomBytes(codeSize).toString('hex');
  }
}
