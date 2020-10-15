import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/database/entities/User/user.entity';

export class UserDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  country: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  houseApartmentNumber: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  joinDate: Date;

  @ApiProperty()
  avatarUrl: string;

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
    Object.assign(this, dto);
  }
}
