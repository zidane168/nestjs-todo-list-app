import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleLanguagesService } from './article-languages.service';
import { CreateArticleLanguageDto } from './dto/create-article-language.dto';
import { UpdateArticleLanguageDto } from './dto/update-article-language.dto';

@Controller('article-languages')
export class ArticleLanguagesController {
  constructor(private readonly articleLanguagesService: ArticleLanguagesService) {}

  @Post()
  create(@Body() createArticleLanguageDto: CreateArticleLanguageDto) {
    return this.articleLanguagesService.create(createArticleLanguageDto);
  }

  @Get()
  findAll() {
    return this.articleLanguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleLanguagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleLanguageDto: UpdateArticleLanguageDto) {
    return this.articleLanguagesService.update(+id, updateArticleLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleLanguagesService.remove(+id);
  }
}
