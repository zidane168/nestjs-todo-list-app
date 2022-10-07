import { RolesPermissionsEntity } from './../roles-permissions/roles-permissions.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity('permissions')  // same as name with db
export class PermissionsEntity extends BaseEnt {
  
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @ApiProperty({example: ' ', description: " "})
  @Column()
  public slug: string;
 
  @ApiProperty({example: ' ', description: ' '})
  @Column()
  public name: string;

  @ApiProperty({example: ' ', description: ' '})
  @Column()
  public method: string;        // get, post, put, patch, delete

  @ApiProperty({example: ' ', description: ' '})
  @Column()
  public functionName: string;      // getUser / CreateUser

  // permissions - rolesPermissions - roles
  @OneToMany(() => RolesPermissionsEntity, rolesPermissions => rolesPermissions.permissions)
  public rolePermissions: RolesPermissionsEntity[];

}