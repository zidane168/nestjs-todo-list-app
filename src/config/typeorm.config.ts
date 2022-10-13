// import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import entities from "src/typeorm";

// https://www.youtube.com/watch?v=1-MRmLsUrAo

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  
    useFactory: async(): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB, 
            entities: entities,       //: [__dirname + '/../entity/*.entity{.ts, .js}'],        // cho generate cai table here!

            migrations: [__dirname + './../migrations/*{.ts, .js}'],
            // cli: {
            //     migrationsDir: './../src/migrations',
            // },
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            synchronize: true,
            logging: true

        }
    }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB, 
    entities: entities,       //: [__dirname + '/../entity/*.entity{.ts, .js}'],        // cho generate cai table here!

    migrations: [__dirname + './../migrations/*{.ts, .js}'],
    // cli: {
    //     migrationsDir: './../src/migrations',
    // },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    }, 
    logging: true
}


// export default class TypeOrmConfig {
//     static getOrmConfig(configService: ConfigService) : TypeOrmModuleOptions {
//         return {
//             type: 'postgres',
//             host: configService.get('POSTGRES_HOST'),
//             port: configService.get('POSTGRES_PORT'),
//             username: configService.get('POSTGRES_USER'),
//             password: configService.get('POSTGRES_PASSWORD'),
//             database: configService.get('POSTGRES_DB'), 
//             entities: [__dirname + '/../entity/*.entity{.ts, .js}'],
//             synchronize: false,
//             logging: true
//         }
//     }
// }