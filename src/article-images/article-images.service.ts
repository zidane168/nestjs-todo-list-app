import { Injectable } from '@nestjs/common';
import { CreateArticleImageDto } from './dto/create-article-image.dto';
import { UpdateArticleImageDto } from './dto/update-article-image.dto';

@Injectable()
export class ArticleImagesService {
  create(createArticleImageDto: CreateArticleImageDto) {
    return 'This action adds a new articleImage';
  }

  findAll() {
    return `This action returns all articleImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleImage`;
  }

  update(id: number, updateArticleImageDto: UpdateArticleImageDto) {
    return `This action updates a #${id} articleImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleImage`;
  }
}
