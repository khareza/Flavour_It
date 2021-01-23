import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class CreateAccountResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  confirmPassword: string;

  @ApiProperty()
  agreement: boolean;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

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

  constructor(user: User) {
    Object.assign(this, user);
  }
}
