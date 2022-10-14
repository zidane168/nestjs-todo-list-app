import { Module } from '@nestjs/common';
import { CompanyLanguagesService } from './company-languages.service';
import { CompanyLanguagesController } from './company-languages.controller';

@Module({
  providers: [CompanyLanguagesService],
  controllers: [CompanyLanguagesController]
})
export class CompanyLanguagesModule {}
