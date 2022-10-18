import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public createdAt: string;

  @Column({
    nullable: true,
  })
  public createdBy: number;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public modifiedAt: string;

  @Column({
    nullable: true,
  })
  public modifiedBy: number;

  @DeleteDateColumn({
    default: null,
    nullable: true,
  })
  public deletedAt: string;

  @Column({
    nullable: true,
  })
  public deletedBy: number;
}
