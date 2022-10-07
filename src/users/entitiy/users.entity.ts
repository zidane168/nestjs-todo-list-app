import { UsersRoles } from "src/users-roles/entity/users-roles.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    id: number;

    @Column()
    public username: string;

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
    @OneToMany(() => UsersRoles, usersRoles => usersRoles.users)
    public usersRoles: UsersRoles[];

    
} 