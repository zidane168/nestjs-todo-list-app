 
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/roles/entity/roles.entity';

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

  @Column()
  public enabled: boolean;

  @Column()
  public created_by: number;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public modified: string;

  @Column()
  public modified_by: number;

  // permissions - rolesPermissions - roles
  // @OneToMany(  () => RolesPermissions,   (rolesPermissions) => rolesPermissions.permissions )
  // public rolesPermissions: RolesPermissions[];
 

  @ManyToMany(() => Roles, permissions => permissions.rp) 
  roles: Roles[];
}
