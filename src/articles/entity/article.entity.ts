 
import {
  Entity,
  OneToMany,
  Column, 
} from 'typeorm';

import { ArticleLanguage } from './../../article-languages/entity/article-language.entity';
import { ArticleImage } from './../../article-images/entity/article-image.entity';
import { Base } from './../../entity/base';

@Entity('article')
export class Article extends Base {  

  // Article have n Article Languages
  @OneToMany( () => ArticleLanguage, (articleLanguages) => articleLanguages.Article, { onDelete: 'CASCADE',  onUpdate: 'CASCADE'} )
  ArticleLanguages: ArticleLanguage[];

  // Article have n Article Images
  @OneToMany( () => ArticleImage, (articleImages) => articleImages.Article, { onDelete: 'CASCADE',  onUpdate: 'CASCADE'} )
  ArticleImages: ArticleImage[];

  @Column()
  public slug: string;
 
}
