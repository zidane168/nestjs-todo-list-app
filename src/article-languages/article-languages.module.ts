import { Module } from '@nestjs/common';
import { ArticleLanguagesService } from './article-languages.service';
import { ArticleLanguagesController } from './article-languages.controller';

@Module({
  controllers: [ArticleLanguagesController],
  providers: [ArticleLanguagesService]
})
export class ArticleLanguagesModule {}
