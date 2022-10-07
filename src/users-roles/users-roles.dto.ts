import { IsString, IsOptional, IsInt } from 'class-validator';
export class UsersRolesDTO {
    @IsInt()
    usersId: number;

    @IsInt()
    rolesId: number;
}