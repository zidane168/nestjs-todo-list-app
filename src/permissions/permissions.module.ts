import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { Permissions } from './entity/permissions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permissions]),
    MyLoggerModule
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService, MyLoggerService]
})
export class PermissionsModule {}
