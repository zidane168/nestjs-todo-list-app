import { RolesPermissionsDTO } from './../roles-permissions/roles-permissions.dto';
import { UsersRolesDTO } from './../users-roles/users-roles.dto';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class RolesDTO {
    @IsString()
    slug: string;

    @IsString()
    name: string;

    @IsOptional()
    rolesPermissions: RolesPermissionsDTO[];

}