import { Test, TestingModule } from '@nestjs/testing';
import { GithubImagesController } from './github-images.controller';
import { GithubImagesService } from './github-images.service';

describe('GithubImagesController', () => {
  let controller: GithubImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubImagesController],
      providers: [GithubImagesService],
    }).compile();

    controller = module.get<GithubImagesController>(GithubImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
