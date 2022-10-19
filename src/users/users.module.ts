import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Users } from './entity/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    MyLoggerModule,

  //   JwtModule.registerAsync({
  //     useClass: JwtConfig,
  // }),

    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '3600s',
      }
    })
  ],
  providers: [UsersService, JwtStrategy, MyLoggerService ], 
  controllers: [UsersController]

  // imports: [TypeOrmModule.forFeature([Users])], 
  // providers: [UsersService],
  // controllers: [UsersController], 
  // exports: [UsersService],

})
export class UsersModule {}
