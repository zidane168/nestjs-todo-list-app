import { PartialType } from '@nestjs/swagger';
import { CreateMyFileDto } from './create-my-file.dto';

export class UpdateMyFileDto extends PartialType(CreateMyFileDto) {}
