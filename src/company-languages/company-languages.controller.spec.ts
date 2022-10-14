import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLanguagesController } from './company-languages.controller';

describe('CompanyLanguagesController', () => {
  let controller: CompanyLanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyLanguagesController],
    }).compile();

    controller = module.get<CompanyLanguagesController>(CompanyLanguagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
