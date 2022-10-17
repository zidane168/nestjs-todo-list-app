import { Module } from '@nestjs/common';
import { ArticleImagesService } from './article-images.service';
import { ArticleImagesController } from './article-images.controller';

@Module({
  controllers: [ArticleImagesController],
  providers: [ArticleImagesService]
})
export class ArticleImagesModule {}
