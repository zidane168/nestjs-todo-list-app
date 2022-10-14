import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLanguagesService } from './company-languages.service';

describe('CompanyLanguagesService', () => {
  let service: CompanyLanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyLanguagesService],
    }).compile();

    service = module.get<CompanyLanguagesService>(CompanyLanguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
