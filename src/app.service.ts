import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users/entity/users.entity';
import * as bcrypt from 'bcrypt';
import { Roles } from './roles/entity/roles.entity';
import { Permissions } from './permissions/entity/permissions.entity'; 
import { jwtConstants } from './auth/constants';

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

  async createPermission() {

    // create permissions
    // const permission1 = await this.permissionsRepository.create({
    //   slug: 'post-add',
    //   name: 'post',
    //   method: 'add',
    //   functionName: 'add',
    // });
    // const permission2 = await this.permissionsRepository.create({
    //   slug: 'post-edit',
    //   name: 'post',
    //   method: 'edit',
    //   functionName: 'edit',
    // });
    // const permission3 = await this.permissionsRepository.create({
    //   slug: 'post-view',
    //   name: 'post',
    //   method: 'view',
    //   functionName: 'view',
    // });
    // const permission4 = await this.permissionsRepository.create({
    //   slug: 'post-index',
    //   name: 'post',
    //   method: 'index',
    //   functionName: 'index',
    // });
    // this.rolesRepository.save(permission1);
    // this.rolesRepository.save(permission2);
    // this.rolesRepository.save(permission3);
    // this.rolesRepository.save(permission4);
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

  async seed() {
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

    await this.rolesRepository.save(role1); 
    await this.rolesRepository.save(role2); 
     
    // role1.ur = [ user ];
    // create users roles
    user.roles = [ role1, role2 ];

    await this.usersRepository.save(user); 
  }

  getHello(): string {
    return 'Hello Todo List App!';
  }
}
