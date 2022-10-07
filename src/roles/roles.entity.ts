import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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

  bled: boolean;

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
  // @OneToMany(() => UsersRolesEntity, usersRoles => usersRoles.roles)
  // public usersRoles: UsersRolesEntity[];

  // // roles - rolesPermissions - permissions
  // @OneToMany(() => RolesPermissionsEntity, rolesPermissions => rolesPermissions.roles)
  // public rolesPermissions: RolesPermissionsEntity[];
}
