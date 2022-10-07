import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id' 
    })
    id: number;

    @Column() 
    public title: string;

    @Column()
    public content: string;

    @Column() 
    public f_done: boolean;
}
  