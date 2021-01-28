import { Body, Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiTagEnum } from 'src/common/enums/api-tag.enum';
import { AccountService } from './account.service';
import { ActivateAccountDto } from './dto/activate-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
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
}
