import { ApiProperty } from '@nestjs/swagger';
import { Matches, MaxLength, MinLength } from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';
import { AccountExceptionMessageEnum } from 'src/modules/account/exception-messages/account-exception-message.enum';

export class ChangePasswordDto {
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
  newPassword: string;

  @ApiProperty()
  @Match('newPassword', { message: AccountExceptionMessageEnum.PASSWORDS_DO_NOT_MATCH })
  confirmPassword: string;

  @ApiProperty()
  oldPassword: string;
}
