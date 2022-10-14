import { ApiProperty } from "@nestjs/swagger";
import { Article } from "./../../articles/entity/article.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('articleLanguage') // same as name with db
export class ArticleLanguage {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
      })
      id: number; 
  
      @ManyToOne(() => Article, (article) => article.ArticleLanguages)
      Article: Article

      @ApiProperty({ example: "en_US", description: "language input here" })
      @Column()
      public alias: string;
  
      @ApiProperty({ example: "", description: "!" })
      @Column()
      public name: string;
  
      @ApiProperty({ example: "", description: "!" })
      @Column()
      public description: string;
  
}
