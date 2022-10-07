import { PermissionsEntity } from './../permissions/permissions.entity';
import { RolesEntity } from './../roles/roles.entity';
import { BaseEnt } from './../base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity('rolesPermissions')  // same as name with db
export class RolesPermissionsEntity extends BaseEnt {
  
  @ApiProperty({example: '', description: ""})
  @Column()
  public rolesId:  number;        // so nhieu, GHI CHU
 
  @ApiProperty({example: '', description: ''})
  @Column()
  public permissionsId: number;   // so nhieu, GHI CHU (if not query will FAILED when leftJoinAndSelect)

  // roles - rolesPermissions - permissions
  @ManyToOne(() => RolesEntity, roles => roles.rolesPermissions)
  public roles: RolesEntity;

  // permission - rolesPermissions - roles 
  @ManyToOne(() => PermissionsEntity, permissions => permissions.rolePermissions)
  public permissions:  PermissionsEntity;

}
 
