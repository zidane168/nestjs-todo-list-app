import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { dataSource } from 'src/config/datasource.config';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entity/article.entity';
import { ArticleLanguage } from './../article-languages/entity/article-language.entity';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';
import { ApiErrorResponse } from 'src/util/api-error-response.util';
import { CreateArticleLanguageDto } from 'src/article-languages/dto/create-article-language.dto';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Article)   private readonly articleRepository: Repository<Article>,
    @InjectRepository(ArticleLanguage) private readonly articleLanguageRepository: Repository<ArticleLanguage>
  ) {}

  async create(createArticleDto: CreateArticleDto) {

    const queryRunner = dataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      const article = await this.articleRepository.create( createArticleDto ) 
      await queryRunner.manager.save(article);   

      for (let i = 0; i < +createArticleDto.articleLanguages.length; i++) {

        let alias = createArticleDto.articleLanguages[i].alias
        let name = createArticleDto.articleLanguages[i].name
        let description = createArticleDto.articleLanguages[i].description
        
        const articleLanguage = new ArticleLanguage();
        articleLanguage.alias = alias
        articleLanguage.name = name
        articleLanguage.description = description
        articleLanguage.Article = article;
        await queryRunner.manager.save(articleLanguage);
      } 
 
      await queryRunner.commitTransaction();
      return new ApiSucceedResponse("data is saved", []);

    } catch (err) {
      
      await queryRunner.rollbackTransaction();
      return new ApiErrorResponse("data is not saved", err);

    } finally {
      await queryRunner.release()
    }


  }

  findAll() {
    const repo = dataSource.getRepository('Article');
    return repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
