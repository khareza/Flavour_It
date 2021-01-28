import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, Equals, MaxLength, MinLength, IsOptional } from 'class-validator';
import { AccountExceptionMessageEnum } from '../exception-messages/account-exception-message.enum';

export class CreateAccountDto {
  @IsNotEmpty({ message: AccountExceptionMessageEnum.REQUIRED_EMAIL })
  @IsEmail(undefined, { message: AccountExceptionMessageEnum.INVALID_EMAIL })
  @ApiProperty()
  email: string;

  @MinLength(8)
  @MaxLength(32)
  @Matches(/(?=.*[A-Z])/, {
    message: AccountExceptionMessageEnum.UPPERCASE_LETTER
  })
  @Matches(/(?=.*\d)/, {
    message: AccountExceptionMessageEnum.DIGIT
  })
  @Matches(/(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/, {
    message: AccountExceptionMessageEnum.SPECIAL_CHARACTER
  })
  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmPassword: string;

  @Equals(true, {
    message: AccountExceptionMessageEnum.NO_AGREEMENT
  })
  @ApiProperty()
  agreement: boolean;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  @IsOptional()
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
