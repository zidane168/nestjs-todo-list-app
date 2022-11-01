import { Module } from '@nestjs/common';
import { GithubImagesService } from './github-images.service';
import { GithubImagesController } from './github-images.controller';

@Module({
  controllers: [GithubImagesController],
  providers: [GithubImagesService]
})
export class GithubImagesModule {}
