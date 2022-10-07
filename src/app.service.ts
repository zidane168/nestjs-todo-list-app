import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users/entity/users.entity';
import * as bcrypt from 'bcrypt';
import { Roles } from './roles/entity/roles.entity';
import { Permissions } from './permissions/entity/permissions.entity'; 

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Permissions)
    private readonly permissionsRepository: Repository<Permissions>,
  ) // @InjectRepository(RolesPermissions) private readonly rolesPermissionsRepository: Repository<RolesPermissions>

  {}

  async createAdmin() {
    const user = await this.usersRepository.create({
      username: 'vilh',
      password: bcrypt.hash('123456'),
    });
    this.usersRepository.save(user);

    // create roles
    const role1 = await this.rolesRepository.create({
      slug: 'admin',
      name: 'admin',
    });
    const role2 = await this.rolesRepository.create({
      slug: 'company-admin',
      name: 'Company Admin',
    });
    this.rolesRepository.save(role1);
    this.rolesRepository.save(role2);

    // create users roles

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
    this.rolesRepository.save(permission1);
    this.rolesRepository.save(permission2);
    this.rolesRepository.save(permission3);
    this.rolesRepository.save(permission4);
  }

  getHello(): string {
    return 'Hello Todo List App!';
  }
}
