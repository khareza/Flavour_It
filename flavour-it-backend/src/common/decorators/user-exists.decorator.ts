import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/modules/prisma/prisma.service';

export function UserExists(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string): void => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [propertyName],
      validator: IsUserAlreadyExist
    });
  };
}

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  constructor(private prismaService: PrismaService) {}

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [propertyName] = args.constraints;

    const user = await this.prismaService.user.findFirst({ where: { [propertyName]: value } });
    return !user;
  }
}
