import { Module } from '@nestjs/common';
import { GithubsService } from './githubs.service';
import { GithubsController } from './githubs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Github } from './entity/github.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Github ]), 
  ],
  
  controllers: [GithubsController],
  providers: [GithubsService]
})
export class GithubsModule {}
