import { Module } from '@nestjs/common';
import { MyFilesService } from './my-files.service';
import { MyFilesController } from './my-files.controller';
import { MyFile } from './entity/my-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { mkdirSync } from 'fs';

@Module({
  imports: [
    TypeOrmModule.forFeature([MyFile]),

    MulterModule.registerAsync({ 
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          filename: function (req, file, cb) {
            const ext = extname(file.originalname);
            cb(null, uuidv4() + ext);
          },
          destination: (req, file, cb) => {
            // const path = configService.get('multer.uploadDir') + (file.fieldname === 'depositImage' ? '/deposits' : '/recording-file');
            const path = './uploads' + (file.fieldname === 'depositImage' ? '/deposits' : '');

            mkdirSync(path, { recursive: true });
            return cb(null, path);
          },
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  
  controllers: [MyFilesController],
  providers: [MyFilesService]
})
export class MyFilesModule {}
