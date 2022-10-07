import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiErrorResponse } from 'src/util/api-error-response.util';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';
import { Common } from 'src/util/common.util';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';  

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private myLogger: MyLoggerService,
  ) {}

  // POST / BODY / raw
  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    // @Res({passthrough: true}) response: Response
  ) {
    if (!Common.isExist(username)) {
      return new ApiErrorResponse('Missing param: username!', {});
    }
    if (!Common.isExist(password)) {
      return new ApiErrorResponse('Missing param: password', {});
    }

    const result = await this.userService.login(username, password);

    let access_token = '';
    if (result.statusCode == 200) {
      access_token = await this.jwtService.sign({ id: result.params }); // response.cookie('jwt', jwt, {httpOnly: true});

      this.myLogger.writeResponseLog('Login Success', access_token);
      return new ApiSucceedResponse('Login Success', access_token);
    }
    return new ApiErrorResponse('Login Failed', access_token);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'aa'
  }
}
