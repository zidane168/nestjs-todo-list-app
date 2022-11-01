import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GithubImagesService } from './github-images.service';
import { CreateGithubImageDto } from './dto/create-github-image.dto';
import { UpdateGithubImageDto } from './dto/update-github-image.dto';

@Controller('github-images')
export class GithubImagesController {
  constructor(private readonly githubImagesService: GithubImagesService) {}

  @Post()
  create(@Body() createGithubImageDto: CreateGithubImageDto) {
    return this.githubImagesService.create(createGithubImageDto);
  }

  @Get()
  findAll() {
    return this.githubImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.githubImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGithubImageDto: UpdateGithubImageDto) {
    return this.githubImagesService.update(+id, updateGithubImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.githubImagesService.remove(+id);
  }
}
