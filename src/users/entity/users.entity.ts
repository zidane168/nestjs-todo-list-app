import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "src/roles/entity/roles.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column() 
    public enabled: boolean;

    @CreateDateColumn({
        default: `now()`,
        nullable: true
    })
    public created: string;

    @Column()
    public created_by: number

    @CreateDateColumn({
        default: `now()`,
        nullable: true 
    })
    public modified: string;

    @Column() 
    public modified_by: number;

    // users - usersRoles - roles
    // @OneToMany(() => UsersRoles, usersRoles => usersRoles.users)
    // public usersRoles: UsersRoles[];

    @ManyToMany(() => Roles, roles => roles.users)
    roles: Roles[];
    
} 