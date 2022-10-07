 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'; 
import { Roles } from 'src/roles/entity/roles.entity';
import { Permissions } from 'src/permissions/entity/permissions.entity';

@Entity('rolesPermissions') // same as name with db
export class RolesPermissions {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @ApiProperty({ example: '', description: '' })
  @Column()
  public rolesId: number; // so nhieu, GHI CHU

  @ApiProperty({ example: '', description: '' })
  @Column()
  public permissionsId: number; // so nhieu, GHI CHU (if not query will FAILED when leftJoinAndSelect)

  // roles - rolesPermissions - permissions
  @ManyToOne(() => Roles, (roles) => roles.rolesPermissions)
  public roles: Roles;

  // permission - rolesPermissions - roles
  @ManyToOne(() => Permissions, (permissions) => permissions.rolePermissions)
  public permissions: Permissions;
}
