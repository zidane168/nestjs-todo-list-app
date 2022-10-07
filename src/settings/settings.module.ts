import { Module } from '@nestjs/common';
import { Setting } from './entity/setting.entity';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule {}
