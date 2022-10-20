import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, CACHE_MANAGER, Inject } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';

@Controller('settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService, 
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()   // create
  create(@Body() createSettingDto: CreateSettingDto) {
    return this.settingsService.create(createSettingDto);
  }

  @Get()    // view
  @UseGuards(JwtAuthGuard, RoleGuard) // Auto call CanActivate function of RoleGuard
  findAll() {
    return this.settingsService.findAll();
  }

  @Get(':id') // view
  @UseGuards(JwtAuthGuard, RoleGuard)
  findOne(@Param('id') id: string) {

    return this.settingsService.findOne(+id);
  }

  @Patch(':id') // update
  update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.update(+id, updateSettingDto);
  }

  @Delete(':id')  // delete
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}
