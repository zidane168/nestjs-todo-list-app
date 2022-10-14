import {
    Column,
    CreateDateColumn,
    Entity, 
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
import { CompanyLanguages } from './../../company-languages/entity/company-languages.entity';
   
  @Entity('companies') // same as name with db
  export class Companies {
    @PrimaryGeneratedColumn({
      type: 'bigint',
      name: 'id',
    })
    id: number;
  
    @ApiProperty({ example: '', description: '' })
    @Column()
    public slug: string;
  
    @Column({
      default: true,
    })
    enabled: boolean;
  
    @CreateDateColumn({
      default: `now()`,
      nullable: true,
    })
    public created: string;
  
    @Column({
      nullable: true,
    })
    public created_by: number;
  
    @CreateDateColumn({
      default: `now()`,
      nullable: true,
    })
    public modified: string;
  
    @Column({
      nullable: true,
    })
    public modified_by: number;
  
    // Companies have n Company Languages
    @OneToMany(() => CompanyLanguages, (companyLanguages) => companyLanguages.Company, { onDelete: 'CASCADE' })
    CompanyLanguages: CompanyLanguages[];
   
  }
  