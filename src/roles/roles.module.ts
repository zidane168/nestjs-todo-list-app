import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module'; 
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { Roles } from './entity/roles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roles]),
    MyLoggerModule
  ],
  controllers: [RolesController],
  providers: [RolesService, MyLoggerService],
})
export class RolesModule {}
