import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/User/user.entity';
import { Repository } from 'typeorm';
import { EncryptionService } from '../encryption/encryption.service';
import { AccountExceptionsEnum } from './exception-codes/account-exceptions.enum';
import { CreateAccountDto } from './models/create-account.dto';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private readonly encryptionService: EncryptionService) {}

  async create(dto: CreateAccountDto): Promise<void> {
    const existedUser = await this.userRepository
      .createQueryBuilder('users')
      .where('email = :email', { email: dto.email })
      .getOne();

    if (existedUser) {
      throw new BadRequestException(AccountExceptionsEnum.EXISTS);
    }

    const createdUser = this.userRepository.create({
      email: dto.email,
      password: await this.encryptionService.hashPassword(dto.password),
      firstName: dto.firstName,
      lastName: dto.lastName,
      birthDate: dto.birthDate,
      country: dto.country,
      city: dto.country,
      houseApartmentNumber: dto.houseApartmentNumber,
      phone: dto.houseApartmentNumber,
      isActive: false,
      activationHash: await this.encryptionService.generateRandomHashCode()
    });

    await this.userRepository.save(createdUser);
    //send activation link
  }
}
