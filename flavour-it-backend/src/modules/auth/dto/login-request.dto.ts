import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty({ default: 'kh@gmail.com' })
  email: string;

  @ApiProperty({ default: '1234' })
  password: string;
}
