import { MyLoggerService } from 'src/my-logger/my-logger.service'; 
import { ApiErrorResponse } from './../util/api-error-response.util';
import { ApiSucceedResponse } from './../util/api-success-response.util';

import { HttpException, HttpStatus, Injectable, Delete } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesDTO } from './roles.dto'; 
import { RelationLoader } from 'typeorm/query-builder/RelationLoader';
import { Common } from 'src/util/common.util';
import { Roles } from 'src/roles/entity/roles.entity';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
        private myLogger: MyLoggerService
    ) { }

    private paginateLimit: number = 20;


    async getRoleById(id: number) {
        const obj = await this.rolesRepository.createQueryBuilder('roles')
                            .where('roles.enabled = true AND roles.id = :id', { id })
                            .leftJoinAndSelect('roles.rolesPermissions', 'rolesPermissions')
                            .leftJoinAndSelect('rolesPermissions.permissions', 'permissions')
                            .getMany();
        
        if (obj) {
            return new ApiSucceedResponse('Retrieve data successfully!', obj);

        } else {
            return new ApiErrorResponse('Company invalid', {});
        }
     }

    async getAllRoles(limit: string, page: string) {

        let [ list, count ] = await this.rolesRepository.createQueryBuilder('roles')
                            .leftJoinAndSelect('roles.rolesPermissions', 'rolesPermissions')
                            .leftJoinAndSelect('rolesPermissions.permissions', 'permissions')
                            .where('roles.enabled = true')  // error condition show don't display the left join issue, remove permissions.enabled = true will display again
                            .orderBy('roles.id', 'DESC')
                            .offset( (Number(page) - 1) * this.paginateLimit )
                            .take( Number(limit) )  // use take, not limit limit is used for all child elements
                            .getManyAndCount()

        return new ApiSucceedResponse('Retrieve data successfully',  { list, count } );
    }


    // async createRole(req: any, param: RolesDTO) {        // assign role to permissions
        
    //     const queryRunner = getConnection().createQueryRunner();

    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();

    //     try {
    //         const obj = new Roles();
    //         obj.slug = param.slug;
    //         obj.name = param.name;
    //         obj.created_by = req.user ? req.user.id : null;
           
    //         await queryRunner.manager.save(obj);

    //         // assign role permissions
    //         if (Common.isExist(param.rolesPermissions)) {
    //             let rolesPermissions = [];
    //             for (let i = 0; i < param.rolesPermissions.length; i++) {
    //                 const temp          = new RolesPermissions();
    //                 temp.permissionsId  = param.rolesPermissions[i].permissionsId;
    //                 temp.rolesId        = obj.id;
    
    //                 rolesPermissions.push(temp);
    //             }
    
    //             await queryRunner.manager.save(rolesPermissions);
    //         }
            
    //         await queryRunner.commitTransaction();
    //         this.myLogger.writeResponseLog(req, "Create all data successfully");
    //         return new ApiSucceedResponse('Create all data successfully',  {});
          
    //     } catch (err) {

    //         await queryRunner.rollbackTransaction();
    //         throw new HttpException(err, HttpStatus.REQUEST_TIMEOUT);
        
    //     } finally {
    //         await queryRunner.release();
    //     }
    // }

    // async updateRole(req: any, param: RolesDTO, id: number) {
       
    //     const queryRunner = getConnection().createQueryRunner();
    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();
    //     try {

    //         const obj = await this.rolesRepository.findOne({id);
    //         if (!obj) {
    //             this.myLogger.writeResponseLog(req, "Role invalid!");
    //             return new ApiErrorResponse('Role invalid!', {});
    //         }
    
    //         if (param.slug) {
    //             obj.slug = param.slug 
    //         }
    //         if (param.name) {
    //             obj.name = param.name;
    //         }

    //         obj.modified_by = req.user ? req.user.id : null;
    //         await queryRunner.manager.save(obj);

    //         if (Common.isExist(param.rolesPermissions)) {

    //             // queryRunner.manager.createQueryBuilder()
    //             //             .delete()
    //             //             .from('rolesPermissions')
    //             //             .where("rolesId = :id", { id })
    //             //             .execute();
    //             queryRunner.manager.delete('rolesPermissions', { rolesId: id }); // delete all rolesId = 3
    //             let rolesPermissions = [];
    //             for (let i = 0; i < param.rolesPermissions.length; i++) {
    //                 const temp              = new RolesPermissions();
    //                 temp.rolesId            = id,
    //                 temp.permissionsId      = param.rolesPermissions[i].permissionsId;
    //                 rolesPermissions.push(temp);
    //             }
    
    //             await queryRunner.manager.save(rolesPermissions);
    //         }
          
    //         await queryRunner.commitTransaction();
    //         this.myLogger.writeResponseLog(req, "Updated data successfully");
    //         return new ApiSucceedResponse('Updated data successfully', {});

    //     } catch (err) {
    //         await queryRunner.rollbackTransaction();
    //         return new ApiErrorResponse('Updated data failed: ' + err, {});
        
    //     } finally {
    //         await queryRunner.release();
    //     }
    // }

    async deleteRole(req: any, id: number) {

        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        
        try {
            const obj = await this.rolesRepository.createQueryBuilder('roles')
                            .where('roles.id = :id', { id })
                            .getOne();
        
            if (!obj) {
                this.myLogger.writeResponseLog(req, "Roles invalid!");
                return new ApiErrorResponse('Roles invalid!', {});
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

    async searchRole(slug, name, limit, page) {

        let conditions = "";

        if (slug) {
            conditions += " AND roles.slug LIKE '%" +  slug + "%'";
        }
        if (name) {
            conditions += " AND roles.name LIKE '%" +  name + "%'";
        }

        const [ list, count ]  = await this.rolesRepository.createQueryBuilder('roles')
                        .leftJoinAndSelect('roles.rolesPermissions', 'rolesPermissions')
                        .leftJoinAndSelect('rolesPermissions.permissions', 'permissions')
                        .where('roles.enabled = true ' + conditions)
                        .offset( (Number(page) - 1) * this.paginateLimit )
                        .take( Number(limit) )  // use take, not limit limit is used for all child elements
                        .getManyAndCount();

        return new ApiSucceedResponse("Retrieve data successfully", { list, count });

    }

}
