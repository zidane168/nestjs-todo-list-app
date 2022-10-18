import { Base } from "../../entity/base";
import { Column, Entity, OneToMany } from "typeorm";
import { ArticleImage } from "./../../article-images/entity/article-image.entity";

@Entity('myFile')
export class MyFile extends Base {
   
    @Column()
    path: string 

    @Column()
    originalName: string

    @Column({
        default: null
    })
    mimeType: string

    @Column({
        default: 0 
    })
    size: Number
}

