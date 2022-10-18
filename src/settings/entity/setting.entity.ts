import { Content } from "./../../common/classes/content.class";
import { Base } from "./../../entity/base";
import { Column, Entity } from "typeorm";

@Entity('setting')
export class Setting extends Base {

    @Column('jsonb', {
        nullable: true,
    })
    content: Content
}
