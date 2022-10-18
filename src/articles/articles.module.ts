import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

import { ArticleLanguage } from './../article-languages/entity/article-language.entity';
import { ArticleImage } from './../article-images/entity/article-image.entity';
import { Article } from './entity/article.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, ArticleLanguage, ArticleImage]),

  ],
  
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
