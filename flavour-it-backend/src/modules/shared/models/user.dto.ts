import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/database/entities/User/user.entity';

export class UserDto {
  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  birthDate?: Date;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  houseApartmentNumber?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  joinDate?: Date;

  @ApiProperty()
  avatarUrl?: string;

  @ApiProperty()
  rate: number;

  @ApiProperty()
  votesUp: number;

  @ApiProperty()
  votesDown: number;

  @ApiProperty()
  offersAmount: number;

  @ApiProperty()
  finishedOffersAmount: number;

  @ApiProperty()
  activeOffersAmount: number;

  @ApiProperty()
  ordersAmount: number;

  @ApiProperty()
  finishedOrdersAmount: number;

  @ApiProperty()
  activeOrdersAmount: number;

  constructor(dto: User) {
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.email = dto.email;
    this.birthDate = dto.birthDate;
    this.country = dto.country;
    this.city = dto.city;
    this.houseApartmentNumber = dto.houseApartmentNumber;
    this.phone = dto.phone;
    this.joinDate = dto.joinDate;
    this.avatarUrl = dto.avatarUrl;
    this.rate = dto.rate;
    this.votesUp = dto.votesUp;
    this.votesDown = dto.votesDown;
    this.offersAmount = dto.offersAmount;
    this.finishedOffersAmount = dto.finishedOffersAmount;
    this.activeOffersAmount = dto.activeOffersAmount;
    this.ordersAmount = dto.ordersAmount;
    this.finishedOrdersAmount = dto.finishedOrdersAmount;
    this.activeOrdersAmount = dto.activeOrdersAmount;
  }
}
