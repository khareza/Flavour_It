import { CreateAccountDto } from '../dto/create-account.dto';

export interface IAccountController {
  register(dto: CreateAccountDto): Promise<void>;
}

export interface IAccountService {
  create(user: CreateAccountDto): Promise<void>;
}
