import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
   
  import { Companies } from './../../companies/entity/companies.entity';
  
  @Entity('companyLanguages') // same as name with db
  export class CompanyLanguages {
    @PrimaryGeneratedColumn({
      type: 'bigint',
      name: 'id',
    })
    id: number;

    @ApiProperty({ example: "en_US", description: "language input here" })
    @Column()
    public alias: string;

    @ApiProperty({ example: "", description: "!" })
    @Column()
    public name: string;

    @ApiProperty({ example: "", description: "!" })
    @Column()
    public description: string;

    @ApiProperty({ example: "", description: "!" })
    @Column()
    public address: string;

    @ManyToOne(() => Companies, (companies) => companies.CompanyLanguages)
    Company: Companies
   
  }
  