import { BadRequestException, Injectable } from '@nestjs/common';
import { EncryptionService } from '../encryption/encryption.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountExceptionMessageEnum } from './exception-messages/account-exception-message.enum';
import { IAccountService } from './interfaces/interfaces';

@Injectable()
export class AccountService implements IAccountService {
  constructor(private prisma: PrismaService, private readonly encryptionService: EncryptionService) {}

  async create(dto: CreateAccountDto): Promise<void> {
    const existedUser = await this.prisma.user.findFirst({ where: { email: dto.email } });

    if (existedUser) {
      throw new BadRequestException(AccountExceptionMessageEnum.EXISTS);
    }

    await this.prisma.user.create({
      data: {
        email: dto.email,
        password: await this.encryptionService.hashPassword(dto.password),
        firstName: dto.firstName,
        lastName: dto.lastName,
        birthDate: dto.birthDate,
        country: dto.country,
        city: dto.country,
        houseApartmentNumber: dto.houseApartmentNumber,
        phone: dto.houseApartmentNumber,
        isActive: false,
        activationHash: await this.encryptionService.generateRandomHashCode()
      }
    });

    //send activation link
  }
}
