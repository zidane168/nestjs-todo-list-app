import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { GithubsService } from './githubs.service';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';

@Controller('githubs')
export class GithubsController {
  constructor(private readonly githubsService: GithubsService) {}

  @Post("generateData")
  generateData() {
    return this.githubsService.generateData()
  }

  @Post()
  create(@Body() createGithubDto: CreateGithubDto) {
    return this.githubsService.create(createGithubDto);
  }

  // {{host}}/githubs?limit=3&page=1
  @Get()
  findAll(
    @Query('limit') limit: number,  /// hjx, new version use @Query
    @Query('page') page: number,
  ) { 
    
    return this.githubsService.findAll(limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.githubsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGithubDto: UpdateGithubDto) {
    return this.githubsService.update(+id, updateGithubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.githubsService.remove(+id);
  }
}
