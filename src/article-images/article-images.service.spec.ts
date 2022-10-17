import { Test, TestingModule } from '@nestjs/testing';
import { ArticleImagesService } from './article-images.service';

describe('ArticleImagesService', () => {
  let service: ArticleImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleImagesService],
    }).compile();

    service = module.get<ArticleImagesService>(ArticleImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
