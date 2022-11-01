import { GithubImage } from "./../../github-images/entity/github-image.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { Base } from './../../entity/base';

@Entity('github')
export class Github extends Base{

  @Column()
  public login: string;

  @Column()
  public node_id: string;
 
  @OneToMany( () => GithubImage, (githubImages) => githubImages.Github, { onDelete: 'CASCADE',  onUpdate: 'CASCADE'} )
  GithubImages: GithubImage[];
}
