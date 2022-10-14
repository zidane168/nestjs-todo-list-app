import { CreateArticleLanguageDto } from "src/article-languages/dto/create-article-language.dto";

export class CreateArticleDto { 
  slug: string; 

  articleLanguages: CreateArticleLanguageDto[]
}
