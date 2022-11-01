import { ConfigModule, ConfigService } from "@nestjs/config";
import entities  from "src/typeorm";
import { DataSource } from "typeorm";

ConfigModule.forRoot()  // automatically load process.env

// used for transaction
export const dataSource =  new DataSource({ 

  type: "postgres",
  host: process.env.POSTGRES_HOST,  // "localhost",
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER, 
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities, 
  synchronize: false,
  logging: true, 
})

dataSource.initialize()
  .then(() => {
      console.log(' --------------------------------------------- ')
      console.log(' Connected with Postgres Successfully!')
      console.log(' --------------------------------------------- ')
  })
  .catch((error) => console.log(error))
 