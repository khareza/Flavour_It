import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

export function OfAge(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string): void => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: OfAgeValidator
    });
  };
}

@ValidatorConstraint({ name: 'OfAge' })
export class OfAgeValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18;
  }
}
