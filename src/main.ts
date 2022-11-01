import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module'; 
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { nestEdge } from 'nest-edge';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  const engine = nestEdge({
    viewsRoot: join(__dirname, '..', 'views'),
    options: {
      cache: process.env.NODE_ENV === 'production',
    },
  });
  app.engine('edge', engine);
  app.setViewEngine('edge');

  // app.setViewEngine('hbs');
  
  app.useGlobalPipes(new ValidationPipe());
  // add HttpExceptionfilter
  app.useGlobalFilters(new HttpExceptionFilter());

  // swagger setup
  const config = new DocumentBuilder()
      .setTitle('Setting CRUD')
      .setDescription('This is automatic generate CRUD by nestjsx/crud ')
      .setVersion('1.0')
      .addTag('setting')
      .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
