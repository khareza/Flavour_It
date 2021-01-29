import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonExceptionMessages } from 'src/common/enums/common-exception-messages.enum';
import { PrismaService } from '../prisma/prisma.service';
import { EditProfileDto } from './dto/edit-profile.dto';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

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
}
