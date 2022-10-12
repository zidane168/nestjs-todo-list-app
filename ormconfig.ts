import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

let configService = new ConfigService();

// https://www.youtube.com/watch?v=sNosL578ECo
const config = new DataSource({
  type: 'postgres',
  synchronize: false,
  migrations: ['dist/src/migrations/*.js'],
  database: 'todolist',
  port:     55432,
  username: 'postgres', // configService.get('POSTGRES_USER'),
  password: '123456', // "'" + configService.get('POSTGRES_PASSWORD') +  "'",
  logging: false,
  // cli: {
  //   migrationsDir: './src/migrations',
  // },
  entities: ['dist/**/entity/*.entity.js']
});


export default config;