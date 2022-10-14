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
      return new ApiSucceedResponse("data is saved", {});

    } catch (err) {
      
      await queryRunner.rollbackTransaction();
      return new ApiErrorResponse("data is not saved", err);

    } finally {
      await queryRunner.release()
    }
  }

  async findAll() {
    const repo = await dataSource.manager.getRepository('Article');
    const articles = await repo.find({
      relations: [
        'ArticleLanguages'
      ],
    })

    return new ApiSucceedResponse("retrieve data successfully", articles)
  }

  async findOne(id: number) {
    // return `This action returns a #${id} article`;
    const repo = await dataSource.manager.getRepository('Article')
    const article = await repo.findOne({
      where: {
        id,
      },
      relations: [
        'ArticleLanguages'
      ],
    })

    return new ApiSucceedResponse("retrieve data successfully", article)
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {

    const queryRunner = dataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    const repo = await dataSource.manager.getRepository('Article')
    const article = await repo.findOne({
      where: {
        id,
      },
      relations: [
        'ArticleLanguages'
      ],
    })
 
    if (!article) {
      return new ApiErrorResponse(`article ${id} not found`, {})
    }    

    let updated = Object.assign(article, updateArticleDto)
    
    await queryRunner.manager.save(updated);
 
    for (let i = 0; i < updateArticleDto.articleLanguages.length; i++) {
      const language = new ArticleLanguage();
      language.id = updateArticleDto.articleLanguages[i].id;
      language.name = updateArticleDto.articleLanguages[i].name;
      language.alias = updateArticleDto.articleLanguages[i].alias;
      language.description = updateArticleDto.articleLanguages[i].description;
      await this.articleLanguageRepository.update(language.id, language); 
    }
    await queryRunner.commitTransaction();

    const newArticle = await repo.findOne({
      where: {
        id,
      },
      relations: [
        'ArticleLanguages'
      ],
    })

    await queryRunner.release();
    return new ApiSucceedResponse("data is saved", newArticle);
  }

  async remove(id: number) { 
    const deleted = await this.articleRepository.softDelete(id)
    return new ApiSucceedResponse("data is deleted", deleted);
  }
}
