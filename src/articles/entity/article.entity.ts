import { ApiProperty } from "@nestjs/swagger";
import { Entity, OneToMany, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

import { ArticleLanguage } from './../../article-languages/entity/article-language.entity'

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
      })
      id: number;

      // Companies have n Company Languages
      @OneToMany(() => ArticleLanguage, (articleLanguages) => articleLanguages.Article, { onDelete: 'CASCADE' })
      ArticleLanguages: ArticleLanguage[];
    
      @ApiProperty({ example: '', description: '' })
      @Column()
      public slug: string;
    
      @Column({
        default: true,
      })
      enabled: boolean;
    
      @CreateDateColumn({
        default: `now()`,
        nullable: true,
      })
      public created: string;
    
      @Column({
        nullable: true,
      })
      public created_by: number;
    
      @CreateDateColumn({
        default: `now()`,
        nullable: true,
      })
      public modified: string;
    
      @Column({
        nullable: true,
      })
      public modified_by: number;
    
}
