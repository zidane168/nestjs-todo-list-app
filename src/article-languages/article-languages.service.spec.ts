import { Test, TestingModule } from '@nestjs/testing';
import { ArticleLanguagesService } from './article-languages.service';

describe('ArticleLanguagesService', () => {
  let service: ArticleLanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleLanguagesService],
    }).compile();

    service = module.get<ArticleLanguagesService>(ArticleLanguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
