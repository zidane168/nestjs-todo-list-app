import { ArticleLanguage, Article, Permissions, Roles, Users } from "src/typeorm";
import { DataSource } from "typeorm";

// used for transaction
export const dataSource =  new DataSource({
  type: "postgres",
  host: "localhost",
  port: 55432,
  username: "postgres", 
  password: "123456",
  database: "todolist",
  entities: [Users, Roles, Permissions, Article, ArticleLanguage],
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