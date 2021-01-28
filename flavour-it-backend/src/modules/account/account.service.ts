import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailSenderService } from '../email-sender/email-sender.service';
import { EncryptionService } from '../encryption/encryption.service';
import { PrismaService } from '../prisma/prisma.service';
import { ActivateAccountDto } from './dto/activate-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
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
    const user = await this.prisma.user.findFirst({ where: { email: dto.email } });

    if (user) {
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
    const user = await this.prisma.user.findFirst({ where: { email: dto.email } });

    if (!user || user.activationHash !== dto.activationKey) {
      throw new BadRequestException(AccountExceptionMessageEnum.ACTIVATION_ERROR);
    }

    await this.prisma.user.update({ where: { email: dto.email }, data: { isActive: true, activationHash: null } });
  }

  async resendAccountActivationEmail(email: string): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new BadRequestException(AccountExceptionMessageEnum.USER_DOES_NOT_EXIST);
    }

    if (user.isActive) {
      throw new BadRequestException(AccountExceptionMessageEnum.ACCOUNT_ALREADY_ACTIVATED);
    }

    await this.emailSenderService.sendAccountActivationLink(user.activationHash as string, user.email);
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new BadRequestException(AccountExceptionMessageEnum.USER_DOES_NOT_EXIST);
    }

    if (!user.isActive) {
      throw new BadRequestException(AccountExceptionMessageEnum.ACCOUNT_NOT_ACTIVE);
    }

    const resetPasswordHash = await this.encryptionService.generateRandomHashCode();

    await this.prisma.user.update({ where: { email }, data: { resetPasswordHash: resetPasswordHash } });

    await this.emailSenderService.sendResetPasswordLink(resetPasswordHash, email);
  }

  async resetPassword(dto: ResetPasswordDto): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { email: dto.email, resetPasswordHash: dto.resetPasswordKey } });

    if (!user) {
      throw new BadRequestException(AccountExceptionMessageEnum.RESET_LINK_WRONG);
    }

    await this.prisma.user.update({
      where: { email: dto.email },
      data: { resetPasswordHash: null, password: await this.encryptionService.hashPassword(dto.newPassword) }
    });
  }
}
