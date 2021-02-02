import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EncryptionModule } from '../encryption/encryption.module';

@Module({
  imports: [PrismaModule, EncryptionModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
