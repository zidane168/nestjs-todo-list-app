import { Test, TestingModule } from '@nestjs/testing';
import { ArticleImagesController } from './article-images.controller';
import { ArticleImagesService } from './article-images.service';

describe('ArticleImagesController', () => {
  let controller: ArticleImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleImagesController],
      providers: [ArticleImagesService],
    }).compile();

    controller = module.get<ArticleImagesController>(ArticleImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
