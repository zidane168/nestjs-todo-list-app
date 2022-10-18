import { ApiProperty } from "@nestjs/swagger";

export class CreateMyFileDto {
    @ApiProperty({ type: String,  example: 'uploads/abc.png', description: '...' })
    path: string 

    @ApiProperty({ type: String, example: 'a-b-c', description: '...' })
    originalName: string

    @ApiProperty({ type: String, example: 'png/image', description: '...' })
    mimeType: string;

    @ApiProperty({ type: Number, example: '23222', description: '...' })
    size: Number;
}
