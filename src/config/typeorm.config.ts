// import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import entities from 'src/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

// https://www.youtube.com/watch?v=1-MRmLsUrAo

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: entities, //: [__dirname + '/../entity/*.entity{.ts, .js}'],        // chỗ generate table!
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      logging: true,
    };
  },
//   dataSourceFactory: async () => {
//     const databaseConfig: DataSourceOptions = { 
//       type: 'postgres',
//       host: process.env.POSTGRES_HOST,
//       port: parseInt(process.env.POSTGRES_PORT, 10),
//       username: process.env.POSTGRES_USER, 
//       password: process.env.POSTGRES_PASSWORD,
//       database: process.env.POSTGRES_DB,
//       entities: entities, 
//       synchronize: false,
//       logging: true, 
//     };

//     const dataSource = await new DataSource(databaseConfig).initialize();
//     // await dataSource.runMigrations();

//     return dataSource;
//   },
 
};

