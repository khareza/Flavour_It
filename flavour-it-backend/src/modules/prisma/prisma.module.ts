import { Module } from '@nestjs/common';
import { IsUserAlreadyExist } from 'src/common/decorators/user-exists.decorator';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService, IsUserAlreadyExist],
  exports: [PrismaService]
})
export class PrismaModule {}
