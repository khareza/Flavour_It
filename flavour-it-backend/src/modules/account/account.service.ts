import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailSenderService } from '../email-sender/email-sender.service';
import { EncryptionService } from '../encryption/encryption.service';
import { PrismaService } from '../prisma/prisma.service';
import { ActivateAccountDto } from './dto/activate-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountExceptionMessageEnum } from './exception-messages/account-exception-message.enum';
import { IAccountService } from './interfaces/interfaces';

@Injectable()
export class AccountService implements IAccountService {
  constructor(
    private prisma: PrismaService,
    private readonly encryptionService: EncryptionService,
    private readonly emailSenderService: EmailSenderService
  ) {}

  async create(dto: CreateAccountDto): Promise<void> {
    const existedUser = await this.prisma.user.findFirst({ where: { email: dto.email } });

    if (existedUser) {
      throw new BadRequestException(AccountExceptionMessageEnum.EXISTS);
    }

    const activationHash = await this.encryptionService.generateRandomHashCode();

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
        activationHash: activationHash
      }
    });

    await this.emailSenderService.sendAccountActivationLink(activationHash, dto.email);
  }

  async activateAccount(dto: ActivateAccountDto): Promise<void> {
    const existedUser = await this.prisma.user.findFirst({ where: { email: dto.email } });

    if (!existedUser || (existedUser.activationHash !== dto.activationKey)) {
      throw new BadRequestException(AccountExceptionMessageEnum.ACTIVATION_ERROR);
    }

    await this.prisma.user.update({ where: { email: dto.email }, data: { isActive: true, activationHash: null } });
  }

  resendAccountActivationEmail(): void {
    //TO DO: resend account activation email
  }
}
