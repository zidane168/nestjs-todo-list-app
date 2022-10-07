 
import { AppService } from './app.service'; 

import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common'; 

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
  ) {}

  @Get() 
  getHello() {
    return this.appService.getHello();
  }

  @Get('cms/index')
  @Render('cms/index')
  index() {
    return { message: 'Hello world!' };
  }

  
  @Get('cms/index2') 
  index2() {
    return Render('cms/index')
  }

  @Get('auth/login')
  @Render('auth/login')
  product() {
    return { message: 'This is Login page' };
  }
  
}
