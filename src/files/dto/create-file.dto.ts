import { ApiProperty } from "@nestjs/swagger";

export class CreateFileDto {

    @ApiProperty({ type: String,  example: 'path', description: 'This is slug example' })
    path: string 

    @ApiProperty({ type: String, example: 'slug', description: 'This is slug example' })
    originalName: string

    @ApiProperty({ type: String, example: 'slug', description: 'This is slug example' })
    mimetype: string;
}
