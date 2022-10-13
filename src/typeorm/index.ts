import { Permissions } from 'src/permissions/entity/permissions.entity';
import { Post } from 'src/post/entity/post.entity'; 
import { Roles } from 'src/roles/entity/roles.entity'; 
 
import { Users } from 'src/users/entity/users.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users,   Roles, Permissions  ];

export { Todo, Post, Users,  Roles, Permissions  };

export default entities;
