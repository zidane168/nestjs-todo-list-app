import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { PermissionsDTO } from './permissions.dto';
import { Permissions } from './entity/permissions.entity';
import { ApiErrorResponse } from './../util/api-error-response.util';
import { ApiSucceedResponse } from './../util/api-success-response.util';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class PermissionsService {

    constructor(
        @InjectRepository(Permissions) private permissionsRepository: Repository<Permissions>,
        private myLogger: MyLoggerService
    ) { }

    private paginateLimit: number = 20;

    async getPermissionById(id: number) {
        const obj = await this.permissionsRepository.createQueryBuilder('permissions')
                            .where('permissions.enabled = true AND permissions.id = :id', { id })
                            .getOne();
        
        if (obj) {
            return new ApiSucceedResponse('Retrieve data successfully!', obj);

        } else {
            return new ApiErrorResponse('Permission invalid', {});
        }
     }

    async getAllPermissions(limit: string, page: string) {

        const [ list, count ] = await this.permissionsRepository.createQueryBuilder('permissions')
                            .where('permissions.enabled = true')
                            .orderBy('permissions.id', 'DESC')
                            .offset( (Number(page) - 1) * this.paginateLimit )
                            .take( Number(limit) )  // use take, not limit limit is used for all child elements
                            .getManyAndCount()
        let obj = {
            list,
            count
        }      

        return new ApiSucceedResponse('Retrieve data successfully',  obj);
    }


    async createPermission(req: any, param: PermissionsDTO) {        
        
        const queryRunner = getConnection().createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const obj = new Permissions();
            obj.slug = param.slug;
            obj.name = param.name;
            obj.method = param.method;
            obj.controller = param.controller;
            obj.created_by = req.user ? req.user.id : null;
           
            await queryRunner.manager.save(obj);
            await queryRunner.commitTransaction();
            this.myLogger.writeResponseLog(req, "Create all data successfully");
            return new ApiSucceedResponse('Create all data successfully',  {});
          
        } catch (err) {

            await queryRunner.rollbackTransaction();
            throw new HttpException(err, HttpStatus.REQUEST_TIMEOUT);
        
        } finally {
            await queryRunner.release();
        }
    }


    async updatePermission(req: any, param: PermissionsDTO, id: number) {
       
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
 

            const obj = await this.permissionsRepository.findOne({
                where: {
                    id: id
                }
            });
            if (!obj) {
                this.myLogger.writeResponseLog(req, "Permission invalid!");
                return new ApiErrorResponse('Permission invalid!', {});
            }
    
            if (param.slug) {
                obj.slug = param.slug 
            }
            if (param.name) {
                obj.name = param.name;
            }
            if (param.method) {
                obj.method = param.method;
            }
            if (param.controller) {
                obj.controller = param.controller;
            }

            obj.modified_by = req.user ? req.user.id : null;
            await queryRunner.manager.save(obj);

            await queryRunner.commitTransaction();
            this.myLogger.writeResponseLog(req, "Updated successfully");

            return new ApiSucceedResponse('Updated data successfully', {});

        } catch (err) {
            await queryRunner.rollbackTransaction();
            return new ApiErrorResponse('Updated data failed: ' + err, {});
        
        } finally {
            await queryRunner.release();
        }
    }

    async deletePermission(req: any, id: number) {

        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        
        try {
            const obj = await this.permissionsRepository.createQueryBuilder('permissions')
                            .where('permissions.id = :id', { id })
                            .getOne();
        
            if (!obj) {
                this.myLogger.writeResponseLog(req, "Permission invalid!");
                return new ApiErrorResponse('Permission invalid!', {});
            } 
            
            obj.enabled = false;
            obj.modified_by = req.user ? req.user.id : null;

            await queryRunner.manager.save(obj);
            await queryRunner.commitTransaction();
            this.myLogger.writeResponseLog(req, "Delete data successfully");
            return new ApiSucceedResponse("Delete data successfully", {});
            
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return new ApiErrorResponse('Delete data unsuccessfully: ' + err, {});
        
        } finally {
            await queryRunner.release();
        }
    }

    async searchPermission(slug, name, method, functionName, limit, page) {

        let conditions = "";

        if (slug) {
            conditions += " AND permissions.slug LIKE '%" +  slug + "%'";
        }
        if (name) {
            conditions += " AND permissions.name LIKE '%" +  name + "%'";
        }
        if (method) {
            conditions += " AND permissions.method LIKE '%" +  method + "%'";
        }
        if (functionName) {
            conditions += " AND permissions.functionName LIKE '%" +  functionName + "%'";
        }

        let [ list, count ] = await this.permissionsRepository.createQueryBuilder('permissions')
                        .where('permissions.enabled = true ' + conditions)
                        .offset( (Number(page) - 1) * this.paginateLimit )
                        .take( Number(limit) )  // use take, not limit limit is used for all child elements
                        .getManyAndCount();
        let obj = {
            list,
            count
        }      
                
        return new ApiSucceedResponse('Retrieve data successfully',  obj);

    }
}
