import { Column, CreateDateColumn, Entity, JoinTable,  ManyToMany,  PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from './../../roles/entity/roles.entity';
 
@Entity('permissions') // same as name with db
export class Permissions {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @ApiProperty({ example: ' ', description: ' ' })
  @Column()
  public slug: string;

  @ApiProperty({ example: ' ', description: ' ' })
  @Column()
  public name: string;

  @ApiProperty({ example: ' ', description: ' ' })
  @Column()
  public method: string; // get, post, put, patch, delete

  @ApiProperty({ example: ' ', description: ' ' })
  @Column()
  public functionName: string; // getUser / CreateUser

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public created: string;

  @Column({
    default: true
  })
  public enabled: boolean;

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

  // permissions - rolesPermissions - roles
  // @OneToMany(  () => RolesPermissions,   (rolesPermissions) => rolesPermissions.permissions )
  // public rolesPermissions: RolesPermissions[];
 

  // @ManyToMany(() => Roles, permissions => permissions.rp) 
  // roles: Roles[];

  @ManyToMany(() => Roles, roles => roles.permissions) 
  @JoinTable()
  rp: Roles[];
}
