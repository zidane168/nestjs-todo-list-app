import { ApiProperty } from "@nestjs/swagger";
import { CreateArticleLanguageDto } from "src/article-languages/dto/create-article-language.dto";
import { CreateMyFileDto } from "src/my-files/dto/create-my-file.dto";

export class CreateArticleDto { 
  @ApiProperty({ type: String, example: 'slug', description: 'This is slug example' })
  slug: string; 
 
  @ApiProperty({ type: [CreateArticleLanguageDto], example: "CreateArticleLanguageDto[]", description: "..." })
  articleLanguages: CreateArticleLanguageDto[]

  @ApiProperty({ type: [Number], example: "Number[]", description: "..." })
  myFileIds: Number[]
}
