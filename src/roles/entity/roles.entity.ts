import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UsersRoles } from 'src/users-roles/entity/users-roles.entity';
import { RolesPermissions } from 'src/roles-permissions/entity/roles-permissions.entity';

@Entity('roles') // same as name with db
export class Roles {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @ApiProperty({ example: '', description: '' })
  @Column()
  public slug: string;

  @ApiProperty({ example: '', description: '' })
  @Column()
  public name: string;

  enabled: boolean;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public created: string;

  @Column()
  public created_by: number;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public modified: string;

  @Column()
  public modified_by: number;

  // roles - usersRoles - users
  @OneToMany(() => UsersRoles, usersRoles => usersRoles.roles)
  public usersRoles: UsersRoles[];

  // // roles - rolesPermissions - permissions
  @OneToMany(() => RolesPermissions, rolesPermissions => rolesPermissions.roles)
  public rolesPermissions: RolesPermissions[];
}
