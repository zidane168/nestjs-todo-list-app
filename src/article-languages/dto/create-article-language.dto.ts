import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleLanguageDto {
 
    @ApiProperty({ example: 'alias', description: 'a-c-b' })
    public alias: string; 

    @ApiProperty({ example: 'name', description: 'name of language' })
    public name: string; 

    @ApiProperty({ example: 'description', description: 'This is description of language' })
    public description: string;
}