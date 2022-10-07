import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Setting } from './entity/setting.entity';


@Injectable()
export class SettingsService extends TypeOrmCrudService<Setting> {

    constructor(@InjectRepository(Setting) repo) {
        super(repo);
    } 
}
