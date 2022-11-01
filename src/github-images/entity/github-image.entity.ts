
import { Github } from "./../../githubs/entity/github.entity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Base } from './../../entity/base';

@Entity('githubImage')
export class GithubImage extends Base {
  
    @ManyToOne(() => Github, (github) => github.GithubImages)
    Github: Github

    @Column({
        default: null 
    })
    myFileId: Number


}
