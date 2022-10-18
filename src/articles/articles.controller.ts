import { Request, Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; 
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) { 
    return await this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll() {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.articlesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return await this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.articlesService.remove(+id);
  }


  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     const fileNameSplit = file.originalname.split('.');
      //     const fileExt = fileNameSplit[fileNameSplit.length - 1];
      //     cb(null, `${Date.now()}.${fileExt}`); 
      //   },
      // }),
    }),
  )
  @Post("upload")
  upload(
    @UploadedFile(
      new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: 'png',
      })
      .build(),
    ) file: Express.Multer.File,
    @Body() createArticleDto: CreateArticleDto,
    @Request() req
 
  ) { 

    console.log(req.body)
    return this.articlesService.upload(file, createArticleDto, req);
    // return {
    //   originalname: file.originalname,
    //   fileName: file.fieldname,
    //   mineType: file.mimetype,
    //   path: '/uploads/' + file.filename
    // } 
  }
}
