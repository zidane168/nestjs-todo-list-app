import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
import { Github } from './entity/github.entity';
import { v4 as uuidv4 } from 'uuid';
import { dataSource } from 'src/config/datasource.config';
import { GithubImage, MyFile } from 'src/typeorm';
import { ApiSucceedResponse } from 'src/util/api-success-response.util';

@Injectable()
export class GithubsService {

  constructor(
    @InjectRepository(Github) private readonly githubsRepository: Repository<Github>
  ) {
    
  }

  generateRandomUsername() {

    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = ""
    var charactersLength = characters.length;

    for ( var i = 0; i < 8 ; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }  
    return result;
  }

  async generateData() { 

    const queryRunner = dataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try { 
      let count:number = 99
      // list Image random 
      let files:number[] = [ 1, 2, 3, 4 ]

      for (let i = 0; i < count; i++) {
        
        const github = this.githubsRepository.create({
          login: this.generateRandomUsername(),
          node_id: uuidv4().substring(1, 8),
        })  
        await queryRunner.manager.save(github)
   
        const githubImage = new GithubImage()
        githubImage.Github = github
        githubImage.myFileId =  Math.floor(Math.random() * (files[files.length - 1] - files[0] + 1)) + files[0];
        await queryRunner.manager.save(githubImage)
      }
 
      await queryRunner.commitTransaction(); 
      return new ApiSucceedResponse("Github data is generation successfully", {})
    
    } catch(err) {
      await queryRunner.rollbackTransaction()
      throw new HttpException(err, HttpStatus.REQUEST_TIMEOUT)
    
    } finally {
      await queryRunner.release()
    }
  }

  private paginateLimit: number = 20;

  create(createGithubDto: CreateGithubDto) {
    return 'This action adds a new github';
  }

  async findAll(limit: number, page: number) {
  
    // new pagination
    const [ list, count ]  = await this.githubsRepository.createQueryBuilder('github')
                    .select(['github.id', 'github.login', 'github.node_id']) 
                    .leftJoinAndMapMany('github.githubImages', GithubImage, 'image', 'github.id = image.githubId') 
                    .leftJoinAndMapMany('image.myFiles', MyFile, 'myFile', 'image.myFileId = myFile.id')   
                    .where('github.enabled = true')  
                    .take( limit )
                    .skip( (page - 1) * limit )
                    .orderBy('github.id')
                    .getManyAndCount()

    const githubs = {
      list,
      count
    }

    return new ApiSucceedResponse("retrieve data successfully", githubs) 
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }
}
