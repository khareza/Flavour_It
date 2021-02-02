import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { ApiTagEnum } from 'src/common/enums/api-tag.enum';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { ChangeEmailDto } from './dto/change-email';
import { ChangePasswordDto } from './dto/change-password';
import { EditProfileDto } from './dto/edit-profile.dto';
import { ProfileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';

@ApiTags(ApiTagEnum.PROFILE)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async get(@User() req: ITokenPayload): Promise<ProfileDto> {
    return this.profileService.get(req.userId);
  }

  @Put('/edit')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async register(@User() req: ITokenPayload, @Body() dto: EditProfileDto): Promise<void> {
    return this.profileService.edit(req.userId, dto);
  }

  @Put('/change-password')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async changePassword(@User() req: ITokenPayload, @Body() dto: ChangePasswordDto): Promise<void> {
    return this.profileService.changePassword(req.userId, dto);
  }

  @Put('/change-email')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async changeEmail(@User() req: ITokenPayload, @Body() dto: ChangeEmailDto): Promise<void> {
    return this.profileService.changeEmail(req.userId, dto);
  }

  @Put('/activate-new-email')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async activateNewEmail(@User() req: ITokenPayload, @Body() dto: ChangeEmailDto): Promise<void> {
    //TO DO
  }
}
