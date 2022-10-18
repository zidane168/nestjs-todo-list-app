import { Controller, Get, Post, Body, Patch, Param, Delete, ParseFilePipeBuilder, UploadedFile } from '@nestjs/common';
import { MyFilesService } from './my-files.service';
import { CreateMyFileDto } from './dto/create-my-file.dto';
import { UpdateMyFileDto } from './dto/update-my-file.dto';

@Controller('my-files')
export class MyFilesController {
  constructor(private readonly myFilesService: MyFilesService) {}

  @Post()
  create(@Body() createMyFileDto: CreateMyFileDto) {
    return this.myFilesService.create(createMyFileDto);
  }

  @Get()
  findAll() {
    return this.myFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyFileDto: UpdateMyFileDto) {
    return this.myFilesService.update(+id, updateMyFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myFilesService.remove(+id);
  }


  @Post("upload")
  upload(
    @UploadedFile(
      // new ParseFilePipeBuilder()
      // .addFileTypeValidator({
      //   fileType: 'png',
      // })
      // .build(),
    ) file: Express.Multer.File,  
  ) { 
 
    console.log('uploading ...')
    return this.myFilesService.upload(file); 
  }
}
