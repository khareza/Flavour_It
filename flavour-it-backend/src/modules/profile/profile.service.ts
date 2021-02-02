import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonExceptionMessages } from 'src/common/enums/common-exception-messages.enum';
import { EmailSenderService } from '../email-sender/email-sender.service';
import { EncryptionService } from '../encryption/encryption.service';
import { PrismaService } from '../prisma/prisma.service';
import { ChangeEmailDto } from './dto/change-email';
import { ChangePasswordDto } from './dto/change-password';
import { EditProfileDto } from './dto/edit-profile.dto';
import { ProfileDto } from './dto/profile.dto';
import { ProfileExceptionMessageEnum } from './exception-messages/profile-exception-messages.enum';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encryptionService: EncryptionService,
    private readonly emailSenderService: EmailSenderService
  ) {}

  async get(id: number): Promise<ProfileDto> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        country: true,
        city: true,
        houseApartmentNumber: true,
        phone: true,
        avatarUrl: true,
        rate: true,
        votesUp: true,
        votesDown: true,
        offersAmount: true,
        finishedOffersAmount: true,
        activeOffersAmount: true,
        ordersAmount: true,
        finishedOrdersAmount: true,
        activeOrdersAmount: true
      }
    });

    if (!user) {
      throw new BadRequestException(CommonExceptionMessages.UNKNOWN);
    }

    return user;
  }

  async edit(id: number, dto: EditProfileDto): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new BadRequestException(CommonExceptionMessages.UNKNOWN);
    }

    await this.prisma.user.update({ where: { id }, data: { ...dto } });
  }

  async changePassword(id: number, dto: ChangePasswordDto): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new BadRequestException(CommonExceptionMessages.UNKNOWN);
    }

    if (this.encryptionService.comparePassword(dto.newPassword, user.password)) {
      throw new BadRequestException(ProfileExceptionMessageEnum.NEW_PASSWORD_ERR);
    }

    if (!this.encryptionService.comparePassword(dto.oldPassword, user.password)) {
      throw new BadRequestException(ProfileExceptionMessageEnum.OLD_PASSWORD_ERR);
    }

    await this.prisma.user.update({ where: { id }, data: { password: await this.encryptionService.hashPassword(dto.newPassword) } });
  }

  async changeEmail(id: number, dto: ChangeEmailDto): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new BadRequestException(CommonExceptionMessages.UNKNOWN);
    }

    const changeEmailHash = await this.encryptionService.generateRandomHashCode();

    await this.prisma.user.update({
      where: { id },
      data: { tempEmail: dto.email, changeEmailHash }
    });

    await this.emailSenderService.sendChangeEmailActivationLink(changeEmailHash, dto.email);
  }

  async resendNewEmailActivationEmail(): Promise<void> {
    //TO DO
  }

  async activateNewEmail(): Promise<void> {
    //TO DO
    //Search for user with specific changeEmailHash and tempEmail
    //Set tempEmail as primary email, remove changeEmailHash and tempEmail
  }
}
