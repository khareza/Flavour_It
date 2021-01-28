export enum AccountExceptionMessageEnum {
  EXISTS = 'User already exists',
  REQUIRED_EMAIL = 'Email is required',
  INVALID_EMAIL = 'Email must be an email',
  UPPERCASE_LETTER = 'Need at least one uppercase letter',
  DIGIT = 'Need at least one digit',
  SPECIAL_CHARACTER = 'Need at least one special character',
  DATE_IN_PAST = 'Date must be in past',
  PASSWORD_MAX_EXCEEDED = 'Password is too long',
  PASSWORD_MIN_EXCEEDED = 'Password is too short',
  NO_AGREEMENT = 'To create account, please accept usage general conditions',
  ACTIVATION_ERROR = 'Error occurred while trying to activate account',
}
