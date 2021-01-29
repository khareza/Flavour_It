import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { ApiTagEnum } from 'src/common/enums/api-tag.enum';
import { ITokenPayload } from 'src/common/interfaces/ITokenPayload.interface';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
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
}
