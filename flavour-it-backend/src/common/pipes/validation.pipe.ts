import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform, Type } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: Record<string, unknown>, metadata: ArgumentMetadata): Promise<Record<string, unknown>> {
    if (value instanceof Object && this.isEmpty(value)) {
      throw new HttpException('Validation failed: No body submitted', HttpStatus.BAD_REQUEST);
    }
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new HttpException({ errors: this.formatErrors(errors) }, HttpStatus.BAD_REQUEST);
    }

    return value;
  }

  private toValidate(metatype: Type<any> | undefined): boolean {
    const types = [String, Boolean, Number, Array, Object];

    return !types.find(type => metatype === type);
  }

  private formatErrors(errors: ValidationError[]): Record<string, string> {
    return errors.reduce((acc: Record<string, string>, err) => {
      if (err.constraints) {
        acc[err.property] = Object.values(err.constraints)[0];
      }
      return acc;
    }, {});
  }

  private isEmpty(value: Record<string, unknown>): boolean {
    return Object.keys(value).length <= 0;
  }
}
