import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserExists } from 'src/common/decorators/user-exists.decorator';
import { AccountExceptionMessageEnum } from 'src/modules/account/exception-messages/account-exception-message.enum';

export class ChangeEmailDto {
  @IsNotEmpty({ message: AccountExceptionMessageEnum.REQUIRED_EMAIL })
  @IsEmail(undefined, { message: AccountExceptionMessageEnum.INVALID_EMAIL })
  @UserExists({ message: AccountExceptionMessageEnum.EMAIL_TAKEN })
  @ApiProperty()
  email: string;
}
