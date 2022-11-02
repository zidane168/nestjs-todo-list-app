import { ArticleImage } from './../article-images/entity/article-image.entity';
import { ArticleLanguage } from './../article-languages/entity/article-language.entity';
import { Article } from './../articles/entity/article.entity'; 
import { MyFile } from './../my-files/entity/my-file.entity';
import { Permissions } from './../permissions/entity/permissions.entity';
import { Post } from './../post/entity/post.entity'; 
import { Roles } from './../roles/entity/roles.entity'; 
import { Setting } from './../settings/entity/setting.entity';
 
import { Users } from './../users/entity/users.entity';
import { Github } from './../githubs/entity/github.entity';
import { GithubImage } from './../github-images/entity/github-image.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users, Roles, Permissions, Article, ArticleLanguage, ArticleImage, MyFile, Setting, Github, GithubImage  ];

export { Todo, Post, Users,  Roles, Permissions, Article, ArticleLanguage, ArticleImage, MyFile, Setting, Github, GithubImage   };

export default entities;
