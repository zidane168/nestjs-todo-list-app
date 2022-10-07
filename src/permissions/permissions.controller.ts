import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { Common } from './../util/common.util';
import { ApiErrorResponse } from './../util/api-error-response.util';
import { PermissionsDTO } from './permissions.dto';
import { PermissionsService } from './permissions.service';
import { RoleGuard } from '../auth/guard/role.guard';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { Controller, Get, Post, Body, Param, Put, Delete, Request, UseGuards, HttpException, HttpStatus } from '@nestjs/common';

@Controller('permissions')
export class PermissionsController {

    constructor(
        private readonly permissionsService: PermissionsService,
        private myLogger: MyLoggerService
    ) {}

    @Get()
    @UseGuards(JwtAuthGuard, RoleGuard)
    getAllPermissions( 
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

            return this.permissionsService.getAllPermissions(limit, page);
        } catch (error) {
            throw new HttpException('error: ' + error, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id') // detail 
    @UseGuards(JwtAuthGuard, RoleGuard)
    getPermissionById (
        @Param('id') id: string
    ) {

        try {
            return this.permissionsService.getPermissionById(Number(id));

        } catch (error) {
            throw new HttpException('error: ' + error, HttpStatus.BAD_REQUEST);
        }
    }

   
    @Post()
    @UseGuards(JwtAuthGuard, RoleGuard)
    createPermission (
        @Request() req, 
        @Body() dto: PermissionsDTO,
        ) {
        try {
           
            if (!Common.isExist(dto.slug)) {
                return new ApiErrorResponse('Missing param: slug', {});
            }            
            if (!Common.isExist(dto.name)) {
                return new ApiErrorResponse('Missing param: name', {});
            }
            if (!Common.isExist(dto.method)) {
                return new ApiErrorResponse('Missing param: method', {});
            }
            if (!Common.isExist(dto.functionName)) {
                return new ApiErrorResponse('Missing param: functionName', {});
            }

            this.myLogger.writeRequestLog(req, "POST", "NONE", dto);
            return this.permissionsService.createPermission(req, dto);

        } catch (error) {
            this.myLogger.writeResponseLog(req, error);
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }


    @Post('search')
    @UseGuards(JwtAuthGuard, RoleGuard)
    searchPermission (
        @Body('slug') slug: string,
        @Body('name') name: string,
        @Body('method') method: string,
        @Body('functionName') functionName: string,
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

            return this.permissionsService.searchPermission(slug, name, method, functionName, limit, page);
        } catch (error) {
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RoleGuard)
    updatePermission (
        @Request() req, 
        @Param('id') id: string,
        @Body() dto: PermissionsDTO,
        ) {
        try {
           
            this.myLogger.writeRequestLog(req, "PUT", Number(id), dto);
            return this.permissionsService.updatePermission(req, dto, Number(id));

        } catch (error) {
            this.myLogger.writeResponseLog(req, error);
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }

   
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RoleGuard)
    deletePermission(
        @Request() req, 
        @Param('id') id: string
    ) {
        try {

            this.myLogger.writeRequestLog(req, "DELETE", Number(id), "NONE");
            return this.permissionsService.deletePermission(req, Number(id));

        } catch (error) {
            this.myLogger.writeResponseLog(req, error);
            throw new HttpException("error: " + error, HttpStatus.BAD_REQUEST);
        }
    }  

}
