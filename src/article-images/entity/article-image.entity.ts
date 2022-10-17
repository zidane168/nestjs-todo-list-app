import { Article } from "./../../articles/entity/article.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('articleImage')
export class ArticleImage {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
    })
    id: number; 

    @ManyToOne(() => Article, (article) => article.ArticleImages)
    Article: Article

    @Column()
    path: string 

    @Column()
    originalName: string

    @Column({
        default: null
    })
    mimetype: string;

}
