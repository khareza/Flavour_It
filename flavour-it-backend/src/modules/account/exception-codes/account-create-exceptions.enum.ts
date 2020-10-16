export enum AccountCreateExceptionsEnum {
  EXISTS = 'user_exists',
  REQUIRED_EMAIL = 'required_email',
  INVALID_EMAIL = 'invalid_email',
  UPPERCASE_LETTER = 'need_uppercase_letter',
  DIGIT = 'need_digit',
  SPECIAL_CHARACTER = 'need_special_character',
  DATE_IN_PAST = 'invalid_date_in_past',
  PASSWORD_MAX_EXCEEDED = 'password_max_exceeded',
  PASSWORD_MIN_EXCEEDED = 'passowrd_min_exceeded',
  NO_AGREEMENT = 'no_agreement'
}
