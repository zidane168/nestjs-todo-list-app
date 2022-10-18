import { Article } from "./../../articles/entity/article.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm"; 
import { MyFile } from "./../../my-files/entity/my-file.entity";
import { Base } from './../../entity/base';
@Entity('articleImage')
export class ArticleImage extends Base {

    @ManyToOne(() => Article, (article) => article.ArticleImages)
    Article: Article

    @Column({
        default: null 
    })
    myFileId: Number

}
