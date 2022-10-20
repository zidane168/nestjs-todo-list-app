import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";

// https://stackoverflow.com/questions/63285055/nestjs-how-to-use-env-variables-in-main-app-module-file-for-database-connecti
ConfigModule.forRoot()  // automatically load content of .env file
 
export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,  
    port: +process.env.POSTGRES_PORT,   
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['src/**/entity/*.entity.ts'],     
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    synchronize: false,
    logging: true,  
    migrations: ['src/migrations/*.ts'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],  
});

connectionSource.initialize();