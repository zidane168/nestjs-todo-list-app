import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entitiy/users.entity'; 
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    MyLoggerModule,
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
