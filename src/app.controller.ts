 
import { AppService } from './app.service'; 

import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common'; 

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
  ) {}

  @Get('createUser') 
  async createUser() {
    await this.appService.createUser(); 
    return "Create User successfully";
  }

  @Get('createCompanyAccount') 
  async createCompanyAdmin() { 
    await this.appService.createCompanyAdmin();
    return "Create company account successfully";
  }

  @Get('assignRoleWithPermission') 
  async assignRoleWithPermission() {
    await this.appService.assignRoleWithPermission(); 
    return "Assign Role with permission successfully";
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
