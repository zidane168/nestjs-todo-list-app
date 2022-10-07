import { RolesDTO } from './../roles/roles.dto';
import { IsInt, IsString, IsOptional } from 'class-validator';

export class PermissionsDTO {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly slug: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly method: string;

    @IsString()
    readonly functionName: string;

    // @IsOptional()
    // roles: RolesDTO;

}