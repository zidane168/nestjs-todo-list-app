import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class RolesPermissionsDTO {

    @IsInt()
    id: number;

    @IsInt()
    rolesId: number;

    @IsInt()
    permissionsId: number;
}