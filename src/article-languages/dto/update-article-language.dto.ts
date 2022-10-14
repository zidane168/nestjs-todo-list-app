import { PartialType } from '@nestjs/swagger';
import { CreateArticleLanguageDto } from './create-article-language.dto';

export class UpdateArticleLanguageDto extends PartialType(CreateArticleLanguageDto) {}
