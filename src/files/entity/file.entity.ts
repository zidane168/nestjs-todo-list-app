import { Base } from "src/entity/base";
import { Column, Entity } from "typeorm";

@Entity('file')
export class File extends Base {
   
    @Column()
    path: string 

    @Column()
    originalName: string

    @Column({
        default: null
    })
    mimetype: string;
}
