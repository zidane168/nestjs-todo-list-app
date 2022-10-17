import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

import { ArticleLanguage } from './../article-languages/entity/article-language.entity';
import { ArticleImage } from './../article-images/entity/article-image.entity';
import { Article } from './entity/article.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { mkdirSync } from 'fs';
@Module({
  imports: [
    TypeOrmModule.forFeature([Article, ArticleLanguage, ArticleImage]),

    MulterModule.registerAsync({ 
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          filename: function (req, file, cb) {
            const ext = extname(file.originalname);
            cb(null, uuidv4() + ext);
          },
          destination: (req, file, cb) => {
            // const path = configService.get('multer.uploadDir') + (file.fieldname === 'depositImage' ? '/deposits' : '/recording-file');
            const path = './uploads' + (file.fieldname === 'depositImage' ? '/deposits' : '');

            mkdirSync(path, { recursive: true });
            return cb(null, path);
          },
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
