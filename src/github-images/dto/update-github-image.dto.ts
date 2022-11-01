import { PartialType } from '@nestjs/swagger';
import { CreateGithubImageDto } from './create-github-image.dto';

export class UpdateGithubImageDto extends PartialType(CreateGithubImageDto) {}
