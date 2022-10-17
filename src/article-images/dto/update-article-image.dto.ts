import { PartialType } from '@nestjs/swagger';
import { CreateArticleImageDto } from './create-article-image.dto';

export class UpdateArticleImageDto extends PartialType(CreateArticleImageDto) {}
