
import { UpdateArticleLanguageDto } from './../../article-languages/dto/update-article-language.dto';

export class UpdateArticleDto {
    slug: string; 

    articleLanguages: UpdateArticleLanguageDto[]
}
