import { Post } from 'src/post/entity/post.entity';
import { Setting } from 'src/settings/entity/setting.entity';
import { Users } from 'src/users/entitiy/users.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users, Setting ];

export { Todo, Post, Users, Setting };

export default entities;
