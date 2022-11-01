import { Injectable } from '@nestjs/common';
import { CreateGithubImageDto } from './dto/create-github-image.dto';
import { UpdateGithubImageDto } from './dto/update-github-image.dto';

@Injectable()
export class GithubImagesService {
  create(createGithubImageDto: CreateGithubImageDto) {
    return 'This action adds a new githubImage';
  }

  findAll() {
    return `This action returns all githubImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} githubImage`;
  }

  update(id: number, updateGithubImageDto: UpdateGithubImageDto) {
    return `This action updates a #${id} githubImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} githubImage`;
  }
}
