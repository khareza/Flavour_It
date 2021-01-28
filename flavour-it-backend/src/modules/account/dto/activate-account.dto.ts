import { ApiProperty } from "@nestjs/swagger";

export class ActivateAccountDto {
    @ApiProperty()
    activationKey: string;

    @ApiProperty()
    email: string;
}