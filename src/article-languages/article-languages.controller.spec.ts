import { Test, TestingModule } from '@nestjs/testing';
import { ArticleLanguagesController } from './article-languages.controller';
import { ArticleLanguagesService } from './article-languages.service';

describe('ArticleLanguagesController', () => {
  let controller: ArticleLanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleLanguagesController],
      providers: [ArticleLanguagesService],
    }).compile();

    controller = module.get<ArticleLanguagesController>(ArticleLanguagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
