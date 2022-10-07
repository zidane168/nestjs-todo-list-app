import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiErrorResponse } from 'src/util/api-error-response.util';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';
import { Repository } from 'typeorm';
import { Users } from './entitiy/users.entity';
import * as bcrypt from 'bcrypt'

// export type User = any;

@Injectable()
export class UsersService {
  // private readonly users: User[];

  // constructor() {
  //     this.users = [
  //         {
  //             userId: 1,
  //             username: 'zidane',
  //             password: 'learntechtips'
  //         },
  //         {
  //             userId: 2,
  //             username: 'john',
  //             password: 'john'
  //         }
  //     ]
  // }

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  // async findOne(username: string ): Promise<User | undefined>{
  //     // return this.users.find(user => user.username === username)
  // }

  // async login(username: string) {

  //     let user = await this.userRepository.findOne({
  //         where: {
  //             username: username,
  //             enabled: true,
  //         }
  //     })

  //     return user;
  // }

  async login(username: string, password: string) {
    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.username = :username', { username })
      .getOne();

    let params = {};
    if (!user) {
      return new ApiErrorResponse('Invalid Credentials', params);
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return new ApiErrorResponse('Invalid Credentials', params);
    }

    params = user.id;
    return new ApiSucceedResponse('Login succeed!"', params);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);

    if (user && user.password == pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async findOne(username: string): Promise<any | undefined> {
    return this.usersRepository
      .createQueryBuilder("users")
      .where("users.username = :username", { username })
      .getOne();
  }

  async validate(id: Number) {
    // const user = await this.usersRepository.findOne(Number(id));// tra ve user + permission + role o day la xong

    // users - usersRoles - roles
    // roles - rolesPermissions - permissions
    const user = await this.usersRepository
      .createQueryBuilder("users") // tra ve user + permission + role
      .leftJoinAndSelect("users.usersRoles", "usersRoles")
      .leftJoinAndSelect("usersRoles.roles", "roles")
      .leftJoinAndSelect("roles.rolesPermissions", "rolesPermissions")
      .leftJoinAndSelect("rolesPermissions.permissions", "permissions")
      .where(
        "users.enabled = true and roles.enabled = true and permissions.enabled = true AND users.id = " +
          id
      )
      .getMany();
    return user ? user : null;
  }

}
