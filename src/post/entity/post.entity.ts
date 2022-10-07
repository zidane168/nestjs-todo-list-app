import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    public id: number;

    @Column() 
    public enabled: boolean;

    @CreateDateColumn({
        default: `now()`,
        nullable: true
    })
    public created: string;

    @Column()
    public created_by: number;

    @CreateDateColumn({
        default: `now()`,
        nullable: true
    })
    public modified: string;

    @Column()
    public modified_by: number;
}
