import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/config/datasource.config';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';

@Injectable()
export class CompaniesService {

    async getOne(id: number) {
        const repository = dataSource.getRepository('Companies');
        const company = await repository.findOne({
            where: [
                id
            ]
        })

        return new ApiSucceedResponse("Retrieve Data Successfully", company)
    }
    
}
