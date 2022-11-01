import { ArticleImage } from 'src/article-images/entity/article-image.entity';
import { ArticleLanguage } from 'src/article-languages/entity/article-language.entity';
import { Article } from 'src/articles/entity/article.entity'; 
import { MyFile } from 'src/my-files/entity/my-file.entity';
import { Permissions } from 'src/permissions/entity/permissions.entity';
import { Post } from 'src/post/entity/post.entity'; 
import { Roles } from 'src/roles/entity/roles.entity'; 
import { Setting } from 'src/settings/entity/setting.entity';
 
import { Users } from 'src/users/entity/users.entity';
import { Github } from 'src/githubs/entity/github.entity';
import { GithubImage } from 'src/github-images/entity/github-image.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users, Roles, Permissions, Article, ArticleLanguage, ArticleImage, MyFile, Setting, Github, GithubImage  ];

export { Todo, Post, Users,  Roles, Permissions, Article, ArticleLanguage, ArticleImage, MyFile, Setting, Github, GithubImage   };

export default entities;
