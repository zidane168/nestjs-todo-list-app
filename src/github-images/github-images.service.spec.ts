import { Test, TestingModule } from '@nestjs/testing';
import { GithubImagesService } from './github-images.service';

describe('GithubImagesService', () => {
  let service: GithubImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubImagesService],
    }).compile();

    service = module.get<GithubImagesService>(GithubImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
