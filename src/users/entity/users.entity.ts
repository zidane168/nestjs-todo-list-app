import { ApiProperty } from "@nestjs/swagger";

import { Roles } from './../../roles/entity/roles.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    id: number;

    @ApiProperty({example: 'username, unique', description: "username login"})
    @Column({unique: true })
    public username: string;

    @ApiProperty({example: '....', description: 'password login'})
    @Column() 
    public password: string;

    @Column({
        default: true
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
    public created_by: number

    @CreateDateColumn({
        default: `now()`,
        nullable: true 
    })
    public modified: string;

    @Column({
        nullable: true
    }) 
    public modified_by: number;

    // users - usersRoles - roles
    // @OneToMany(() => UsersRoles, usersRoles => usersRoles.users)
    // public usersRoles: UsersRoles[];

    @ManyToMany(() => Roles, roles => roles.ur) 
    roles: Roles[];
    
} 