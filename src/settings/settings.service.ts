import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entity/setting.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class SettingsService {

  constructor(
    @InjectRepository(Setting) private readonly settingRepository:Repository<Setting>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,  

  ) {}

  async create(createSettingDto: CreateSettingDto) {

    // const setting = new Setting();
    // setting.content = {
    //   'title': 'acb',
    //   'name': 'This is ACB Bank',
    //   'phone': '090xxxxxxx',
    //   'email': 'abc@online.acb.com'  
    // }
       
    this.settingRepository.create( createSettingDto )
    await this.settingRepository.save(createSettingDto);

    return new ApiSucceedResponse("data is saved", {})
  }

  findAll() {
    return `This action returns all settings`;
  }

  async findOne(id: number) {

    const cached = await this.cacheManager.get('setting');
    if (cached) {
      return new ApiSucceedResponse('retrieved data successfully', cached)
    }

    const setting = await this.settingRepository.query(`SELECT content->'name' as name from setting WHERE id=1`)
    const flag = await this.cacheManager.set('setting', JSON.stringify(setting), { ttl: 0 });
    console.log(flag)
    console.log('vao day');
    return new ApiSucceedResponse('retrieved data successfully', setting)
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return `This action updates a #${id} setting`;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
