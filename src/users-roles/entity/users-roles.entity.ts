import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'; 
import { Roles } from 'src/roles/entity/roles.entity'; 
import { Users } from 'src/users/entity/users.entity';

@Entity('usersRoles') // same as name with db
export class UsersRoles {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @ApiProperty({ example: '', description: '' })
  @Column()
  public usersId: number;

  @ApiProperty({ example: '', description: '' })
  @Column()
  public rolesId: number;
 

  // // users - usersRoles - roles
  @ManyToOne(() => Users, (users) => users.usersRoles)
  public users: Users;

  // users - usersRoles - roles
  @ManyToOne(() => Roles, (roles) => roles.usersRoles)
  public roles: Roles;
}
