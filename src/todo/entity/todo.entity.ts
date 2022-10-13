import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
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
  