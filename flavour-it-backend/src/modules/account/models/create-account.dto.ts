import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, Equals, MaxDate, MaxLength, MinLength, IsOptional } from 'class-validator';
import { AccountCreateExceptionsEnum } from '../exception-codes/account-create-exceptions.enum';

export class CreateAccountDto {
  @IsNotEmpty({ message: AccountCreateExceptionsEnum.REQUIRED_EMAIL })
  @IsEmail(undefined, { message: AccountCreateExceptionsEnum.INVALID_EMAIL })
  @ApiProperty()
  email: string;

  @MinLength(8, {
    message: AccountCreateExceptionsEnum.PASSWORD_MIN_EXCEEDED
  })
  @MaxLength(32, {
    message: AccountCreateExceptionsEnum.PASSWORD_MAX_EXCEEDED
  })
  @Matches(/(?=.*[A-Z])/, {
    message: AccountCreateExceptionsEnum.UPPERCASE_LETTER
  })
  @Matches(/(?=.*\d)/, {
    message: AccountCreateExceptionsEnum.DIGIT
  })
  @Matches(/(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/, {
    message: AccountCreateExceptionsEnum.SPECIAL_CHARACTER
  })
  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmPassword: string;

  @Equals(true, {
    message: AccountCreateExceptionsEnum.NO_AGREEMENT
  })
  @ApiProperty()
  agreement: boolean;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @MaxDate(new Date(), {
    message: AccountCreateExceptionsEnum.DATE_IN_PAST
  })
  birthDate?: Date;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  houseApartmentNumber?: string;

  @ApiProperty()
  phone?: string;
}
