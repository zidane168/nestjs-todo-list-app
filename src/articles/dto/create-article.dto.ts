import { ApiProperty } from "@nestjs/swagger";
import { CreateArticleLanguageDto } from "src/article-languages/dto/create-article-language.dto";

export class CreateArticleDto { 
  @ApiProperty({ type: String, example: 'slug', description: 'This is slug example' })
  slug: string; 
 
  @ApiProperty({ type: [CreateArticleLanguageDto], example: "CreateArticleLanguageDto[]", description: "language input here" })
  articleLanguages: CreateArticleLanguageDto[]
}
