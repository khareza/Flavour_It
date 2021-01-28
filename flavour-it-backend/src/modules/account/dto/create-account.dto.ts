import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, Equals, MaxLength, MinLength, IsDateString } from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';
import { OfAge } from 'src/common/decorators/of-age.decorator';
import { UserExists } from 'src/common/decorators/user-exists.decorator';
import { AccountExceptionMessageEnum } from '../exception-messages/account-exception-message.enum';

export class CreateAccountDto {
  @IsNotEmpty({ message: AccountExceptionMessageEnum.REQUIRED_EMAIL })
  @IsEmail(undefined, { message: AccountExceptionMessageEnum.INVALID_EMAIL })
  @UserExists({ message: AccountExceptionMessageEnum.EMAIL_TAKEN })
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
  @Match('password', { message: AccountExceptionMessageEnum.PASSWORDS_DO_NOT_MATCH })
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
  @IsDateString()
  @OfAge({ message: AccountExceptionMessageEnum.OF_AGE })
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
