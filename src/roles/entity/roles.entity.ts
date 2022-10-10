import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/users/entity/users.entity';
import { Permissions } from 'src/permissions/entity/permissions.entity';

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

  @Column({
    default: true,
  })
  enabled: boolean;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public created: string;

  @Column({
    nullable: true,
  })
  public created_by: number;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public modified: string;

  @Column({
    nullable: true,
  })
  public modified_by: number;

  // roles - usersRoles - users
  // @OneToMany(() => UsersRoles, usersRoles => usersRoles.roles)
  // public usersRoles: UsersRoles[];
  @ManyToMany(() => Users, (users) => users.roles, { onDelete: 'CASCADE' })
  @JoinTable()
  ur: Users[];

  // @ManyToMany(() => Permissions, (permissions) => permissions.roles, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinTable()
  // rp: Permissions[];

  @ManyToMany(() => Permissions, (permissions) => permissions.rp, {
    onDelete: 'CASCADE',
  })
  permissions: Permissions[];



  // // roles - rolesPermissions - permissions
  // @OneToMany(() => RolesPermissions, rolesPermissions => rolesPermissions.roles)
  // public rolesPermissions: RolesPermissions[];
}
