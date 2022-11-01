import { PartialType } from '@nestjs/swagger';
import { CreateGithubDto } from './create-github.dto';

export class UpdateGithubDto extends PartialType(CreateGithubDto) {}
