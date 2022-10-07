 
import { Column, CreateDateColumn, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/typeorm';

@Entity('usersRoles')  // same as name with db
export class UsersRoles   {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id'
    })
    id: number;
    
    @ApiProperty({example: '', description: ""})
    @Column()
    public usersId: number

    @ApiProperty({example: '', description: ""})
    @Column()
    public rolesId: number;

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
    @ManyToOne(() => Users, users => users.usersRoles)
    public users: Users;

}
 
