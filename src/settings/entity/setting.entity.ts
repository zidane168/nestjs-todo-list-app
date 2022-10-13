import {  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger"

@Entity('setting')
export class Setting {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    public id: number;

    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public value: string;

    @ApiProperty()
    @Column({
        default: 1
    }) 
    public enabled: boolean;

    @CreateDateColumn({
        default: `now()`,
        nullable: true
    })
    public created: string;

    @Column({
        nullable: true
    })
    public created_by: number;

    @CreateDateColumn({
        default: `now()`,
        nullable: true
    })
    public modified: string;

    @Column({
        nullable: true
    })
    public modified_by: number;
}
