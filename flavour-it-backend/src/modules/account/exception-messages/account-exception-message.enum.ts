export enum AccountExceptionMessageEnum {
  EXISTS = 'User already exists',
  EMAIL_TAKEN = 'Email has already been taken',
  REQUIRED_EMAIL = 'Email is required',
  INVALID_EMAIL = 'Email must be an email',
  UPPERCASE_LETTER = 'Need at least one uppercase letter',
  DIGIT = 'Need at least one digit',
  SPECIAL_CHARACTER = 'Need at least one special character',
  OF_AGE = 'User must be at least 18 years old',
  PASSWORD_MAX_EXCEEDED = 'Password is too long',
  PASSWORD_MIN_EXCEEDED = 'Password is too short',
  PASSWORDS_DO_NOT_MATCH = 'Passwords do not match',
  NO_AGREEMENT = 'To create account, please accept usage general conditions',
  ACTIVATION_ERROR = 'Error occurred while trying to activate account',
  USER_DOES_NOT_EXIST = 'User with this email does not nor exist',
  ACCOUNT_ALREADY_ACTIVATED = 'Account has been already activated',
  ACCOUNT_NOT_ACTIVE = 'Account is not active',
  RESET_LINK_WRONG = 'Reset link is wrong or inactive'
}
