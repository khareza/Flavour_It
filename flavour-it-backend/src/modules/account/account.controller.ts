import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiTagEnum } from 'src/common/enums/api-tag.enum';
import { AccountService } from './account.service';
import { ActivateAccountDto } from './dto/activate-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { IAccountController } from './interfaces/interfaces';

@ApiTags(ApiTagEnum.ACCOUNT)
@Controller('account')
export class AccountController implements IAccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/register')
  async register(@Body() dto: CreateAccountDto): Promise<void> {
    return this.accountService.create(dto);
  }

  @Post('/activate-account')
  async activateAccount(@Query() dto: ActivateAccountDto): Promise<void> {
    return this.accountService.activateAccount(dto);
  }

  @Post('/resend-activation-email/:email')
  async resendAccountActivationEmail(@Param('email') email: string): Promise<void> {
    return this.accountService.resendAccountActivationEmail(email);
  }

  @Post('/forgot-password/:email')
  async forgotPassword(@Param('email') email: string): Promise<void> {
    return this.accountService.forgotPassword(email);
  }
  @Post('/reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto): Promise<void> {
    return this.accountService.resetPassword(dto);
  }
}
