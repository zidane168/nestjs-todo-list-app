
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class RolesDTO {
    @IsString()
    slug: string;

    @IsString()
    name: string;

    @IsBoolean()
    enabled: boolean;
 

}