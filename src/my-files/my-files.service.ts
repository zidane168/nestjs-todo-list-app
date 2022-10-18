import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';
import { Repository } from 'typeorm';
import { CreateMyFileDto } from './dto/create-my-file.dto';
import { UpdateMyFileDto } from './dto/update-my-file.dto';
import { MyFile } from './entity/my-file.entity';

@Injectable()
export class MyFilesService {

  constructor(
    @InjectRepository(MyFile) private readonly myFileRepository: Repository<MyFile>
  ) {

  }

  create(createMyFileDto: CreateMyFileDto) {
    return 'This action adds a new myFile';
  }

  findAll() {
    return `This action returns all myFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myFile`;
  }

  update(id: number, updateMyFileDto: UpdateMyFileDto) {
    return `This action updates a #${id} myFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} myFile`;
  }




  async upload(file: any)  {

    const myFile = new MyFile();
    myFile.mimeType =  file.minetype
    myFile.originalName = file.originalname
    myFile.path = file.path

    const id = await this.myFileRepository.create( myFile );
    console.log(id)
    await this.myFileRepository.save(myFile)

    return new ApiSucceedResponse("file is upload succeed!", id);
  }
}
