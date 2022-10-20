import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { PostModule } from './post/post.module'; 
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware'; 
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { Roles, Users, Permissions } from './typeorm';
// import configuration from 'src/config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CompaniesModule } from './companies/companies.module'; 
import { CompanyLanguagesModule } from './company-languages/company-languages.module';
import { ArticlesModule } from './articles/articles.module';
import { ArticleLanguagesModule } from './article-languages/article-languages.module';
import { ArticleImagesModule } from './article-images/article-images.module'; 
import { MyFilesModule } from './my-files/my-files.module';
import { SettingsModule } from './settings/settings.module';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
 

    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   validationSchema: Joi.object({
    //     POSTGRES_HOST: Joi.string().required(),
    //     POSTGRES_PORT: Joi.number().required(),
    //     POSTGRES_USER: Joi.string().required(),
    //     POSTGRES_PASSWORD: Joi.string().required(),
    //     POSTGRES_DB: Joi.string().required(),
    //     PORT: Joi.number(), 
    //   })
    // }), 
    TodoModule,
    PostModule,  
    UsersModule,
    RolesModule, 
    PermissionsModule, 
    TypeOrmModule.forFeature([Users, Roles, Permissions ]),
    CompaniesModule,
    CompanyLanguagesModule,
    ArticlesModule,
    ArticleLanguagesModule,
    ArticleImagesModule,
    MyFilesModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}

// implement middleware
// export class AppModule implements NestModule {

//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes('cms')
//   }
// }
