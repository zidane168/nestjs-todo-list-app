import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users/entity/users.entity';
import * as bcrypt from 'bcrypt';
import { Roles } from './roles/entity/roles.entity';
import { Permissions } from './permissions/entity/permissions.entity'; 
import { jwtConstants } from './auth/constants';
import { dataSource } from './config/datasource.config';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Permissions)
    private readonly permissionsRepository: Repository<Permissions>,
  ) {}

  welcome(){
    return "welcome to todolist"
  }

  async assignRoleWithPermission() {

    // create permissions
    const permission1 = await this.permissionsRepository.create({
      slug: 'post-add',
      name: 'post',
      method: 'add',
      functionName: 'add',
    });
    const permission2 = await this.permissionsRepository.create({
      slug: 'post-edit',
      name: 'post',
      method: 'edit',
      functionName: 'edit',
    });
    const permission3 = await this.permissionsRepository.create({
      slug: 'post-view',
      name: 'post',
      method: 'view',
      functionName: 'view',
    });
    const permission4 = await this.permissionsRepository.create({
      slug: 'post-index',
      name: 'post',
      method: 'index',
      functionName: 'index',
    });

    // remember await, that a key to sync data to DB
    await this.permissionsRepository.save(permission1);
    await this.permissionsRepository.save(permission2);
    await this.permissionsRepository.save(permission3);
    await this.permissionsRepository.save(permission4);

    // find role
    const role = await this.rolesRepository.findOne({
      where : {
        name: 'Company Admin'
      }
    })
 
    // assign role with permission  
    role.permissions = [ permission1, permission2, permission3, permission4 ]
    
    await this.rolesRepository.save(role);
   
  }

  async createCompanyAdmin() {
    const user = await this.usersRepository.create({
      username: 'zidane',
      password: '123456', // bcrypt.hash('123456', jwtConstants.secret),
    }); 

    // find roles
    const role2 = await this.rolesRepository.findOne({
      where: {
        name: 'Company Admin',
      },
    });
     
    // role2.ur = [ user ];
    // create users roles
    user.roles = [ role2 ];

    await this.usersRepository.save(user); 
  }

  async createUser() {

    const queryRunner = dataSource.createQueryRunner()
    await queryRunner.connect() 
    await queryRunner.startTransaction()

    try {

      const user = await this.usersRepository.create({
        username: 'vilh',
        password: '123456', // bcrypt.hash('123456', jwtConstants.secret),
      }); 
  
      // create roles
      const role1 = await this.rolesRepository.create({
        slug: 'admin',
        name: 'admin',
      });
      const role2 = await this.rolesRepository.create({
        slug: 'company-admin',
        name: 'Company Admin',
      });

      // await this.rolesRepository.save(role1); 
      // await this.rolesRepository.save(role2); 
      await queryRunner.manager.save(role1)
      await queryRunner.manager.save(role2)

         
      // create users roles
      user.roles = [ role1, role2 ];
  
      //await this.usersRepository.save(user); 
      await queryRunner.manager.save(user) 
      await queryRunner.commitTransaction()
       
    
    } catch (err) {
      await queryRunner.rollbackTransaction()
      throw new HttpException(err, HttpStatus.REQUEST_TIMEOUT);

    } finally {
      await queryRunner.release()
    } 
  }

  getHello(): string {
    return 'Hello Todo List App!';
  }
}
