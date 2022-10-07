import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { ApiErrorResponse } from './../util/api-error-response.util';
import { RolesService } from './roles.service';
import { RoleGuard } from '../auth/guard/role.guard';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { Controller, Get, Post, Body, Param, Put, Delete, Request, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { RolesDTO } from './roles.dto';
import { Common } from 'src/util/common.util';

@Controller('roles')
export class RolesController {

    constructor(
        private readonly rolesService: RolesService,
        private myLogger: MyLoggerService
    ) {}

    @Get()
    @UseGuards(JwtAuthGuard, RoleGuard)
    getAllRoles( 
        @Body('limit') limit: string, 
        @Body('page') page: string,
    ) {

        try {
            if (!Common.isExist(limit)) {
                return new ApiErrorResponse('Missing param: limit', {});
            }
            
            if (!Common.isExist(page)) {
                return new ApiErrorResponse('Missing param: page', {});
            }

            return this.rolesService.getAllRoles(limit, page);
        } catch (error) {
            throw new HttpException('error: ' + error, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id') // detail 
    @UseGuards(JwtAuthGuard, RoleGuard)
    getRoleById (
        @Param('id') id: string
    ) {

        try {

            return this.rolesService.getRoleById(Number(id));

        } catch (error) {
            throw new HttpException('error: ' + error, HttpStatus.BAD_REQUEST);
        }
    }

   
    // @Post()
    // @UseGuards(JwtAuthGuard, RoleGuard)
    // createRole (    // assign role with permission
    //     @Request() req, 
    //     @Body() dto: RolesDTO,
    //     ) {
    //     try {
    //         if (!Common.isExist(dto.slug)) {
    //             return new ApiErrorResponse('Missing param: slug', {});
    //         }
    //         if (!Common.isExist(dto.name)) {
    //             return new ApiErrorResponse('Missing param: name', {});
    //         }

    //         this.myLogger.writeRequestLog(req, "POST", "NONE", dto);
    //         return this.rolesService.createRole(req, dto);

    //     } catch (error) {
    //         this.myLogger.writeResponseLog(req, error);
    //         throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
    //     }
    // }


    @Post('search')
    @UseGuards(JwtAuthGuard, RoleGuard)
    searchRole (
        @Body('slug') slug: string,
        @Body('name') name: string,
        @Body('limit') limit: string,
        @Body('page') page: string,
    ) {
        try {

            if (!Common.isExist(limit)) {
                return new ApiErrorResponse('Missing param: limit', {});
            }
            if (!Common.isExist(page)) {
                return new ApiErrorResponse('Missing param: page', {});
            }

            return this.rolesService.searchRole(slug, name, limit, page);
        } catch (error) {
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }

    // @Put(':id')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    // updateRole (
    //     @Request() req, 
    //     @Param('id') id: string,
    //     @Body() dto: RolesDTO,
    //     ) {
    //     try {

    //         this.myLogger.writeRequestLog(req, "PUT", Number(id), dto);
    //         return this.rolesService.updateRole(req, dto, Number(id));

    //     } catch (error) {
    //         this.myLogger.writeResponseLog(req, error);
    //         throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
    //     }
    // }

   
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RoleGuard)
    deleteRole(
        @Request() req, 
        @Param('id') id: string
    ) {
        try {

            this.myLogger.writeRequestLog(req, "DELETE", Number(id), "NONE");
            return this.rolesService.deleteRole(req, Number(id));

        } catch (error) {
            this.myLogger.writeResponseLog(req, error);
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }  

}
