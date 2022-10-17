import { ArticleImage } from 'src/article-images/entity/article-image.entity';
import { ArticleLanguage } from 'src/article-languages/entity/article-language.entity';
import { Article } from 'src/articles/entity/article.entity';
import { Permissions } from 'src/permissions/entity/permissions.entity';
import { Post } from 'src/post/entity/post.entity'; 
import { Roles } from 'src/roles/entity/roles.entity'; 
 
import { Users } from 'src/users/entity/users.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users, Roles, Permissions, Article, ArticleLanguage, ArticleImage  ];

export { Todo, Post, Users,  Roles, Permissions, Article, ArticleLanguage, ArticleImage  };

export default entities;
