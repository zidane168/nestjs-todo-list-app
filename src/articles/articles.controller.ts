import { Request, Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; 
import { MyFile } from 'src/typeorm';
import { CreateMyFileDto } from './../my-files/dto/create-my-file.dto';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) { 
    return await this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll() {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.articlesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return await this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.articlesService.remove(+id);
  }

  @Post("assignImage")
  assignImage( 
    @Body() createArticleDto: CreateArticleDto,   
  ) { 
    return this.articlesService.assignImage(createArticleDto)
  }
}
