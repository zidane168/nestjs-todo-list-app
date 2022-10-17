import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleImagesService } from './article-images.service';
import { CreateArticleImageDto } from './dto/create-article-image.dto';
import { UpdateArticleImageDto } from './dto/update-article-image.dto';

@Controller('article-images')
export class ArticleImagesController {
  constructor(private readonly articleImagesService: ArticleImagesService) {}

  @Post()
  create(@Body() createArticleImageDto: CreateArticleImageDto) {
    return this.articleImagesService.create(createArticleImageDto);
  }

  @Get()
  findAll() {
    return this.articleImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleImageDto: UpdateArticleImageDto) {
    return this.articleImagesService.update(+id, updateArticleImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleImagesService.remove(+id);
  }
}
