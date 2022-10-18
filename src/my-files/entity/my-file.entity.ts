import { Base } from "../../entity/base";
import { Column, Entity } from "typeorm";

@Entity('myFile')
export class MyFile extends Base {
   
    @Column()
    path: string 

    @Column()
    originalName: string

    @Column({
        default: null
    })
    mimeType: string;
}

