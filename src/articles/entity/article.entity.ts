import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  OneToMany,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

import { ArticleLanguage } from './../../article-languages/entity/article-language.entity';
import { ArticleImage } from './../../article-images/entity/article-image.entity';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  // Article have n Article Languages
  @OneToMany( () => ArticleLanguage, (articleLanguages) => articleLanguages.Article, { onDelete: 'CASCADE',  onUpdate: 'CASCADE'} )
  ArticleLanguages: ArticleLanguage[];

  // Article have n Article Images
  @OneToMany( () => ArticleImage, (articleImages) => articleImages.Article, { onDelete: 'CASCADE',  onUpdate: 'CASCADE'} )
  ArticleImages: ArticleImage[];
 

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

  @DeleteDateColumn({ 
    default: null,
    nullable: true,
  })
  public deletedAt: string;

  @Column({
    nullable: true,
  })
  public deleted_by: number;
}
