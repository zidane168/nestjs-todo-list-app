import { Injectable } from '@nestjs/common';
import { CreateArticleLanguageDto } from './dto/create-article-language.dto';
import { UpdateArticleLanguageDto } from './dto/update-article-language.dto';

@Injectable()
export class ArticleLanguagesService {
  create(createArticleLanguageDto: CreateArticleLanguageDto) {
    return 'This action adds a new articleLanguage';
  }

  findAll() {
    return `This action returns all articleLanguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleLanguage`;
  }

  update(id: number, updateArticleLanguageDto: UpdateArticleLanguageDto) {
    return `This action updates a #${id} articleLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleLanguage`;
  }
}
