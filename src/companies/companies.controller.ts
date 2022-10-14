import { Controller, Get } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {

    constructor(
        private readonly companiesService: CompaniesService, 
    ) {}

    @Get('getOne') 
    async getOne(id: number) { 
        return await this.companiesService.getOne(id);
    }
  
}
