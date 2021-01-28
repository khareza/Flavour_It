import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDto {
    @ApiProperty()
    resetPasswordKey: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    newPassword: string;

    @ApiProperty()
    confirmPassword: string;
  }
  