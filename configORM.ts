import { DataSource } from "typeorm";
 
export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 55432,
    username: 'postgres',
    password: '123456',
    database: 'todolist',
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