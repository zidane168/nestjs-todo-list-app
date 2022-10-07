import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { RolesEntity } from "./roles.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([RolesEntity]),
    MyLoggerModule
  ],
  controllers: [RolesController],
  providers: [RolesService, MyLoggerService],
})
export class RolesModule {}
