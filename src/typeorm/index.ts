import { Permissions } from 'src/permissions/entity/permissions.entity';
import { Post } from 'src/post/entity/post.entity';
import { RolesPermissions } from 'src/roles-permissions/entity/roles-permissions.entity';
import { Roles } from 'src/roles/entity/roles.entity';
import { Setting } from 'src/settings/entity/setting.entity'; 
import { UsersRoles } from 'src/users-roles/entity/users-roles.entity';
import { Users } from 'src/users/entity/users.entity';
import { Todo } from '../todo/entity/todo.entity'

const entities = [ Todo, Post, Users, Setting, Roles, Permissions, UsersRoles, RolesPermissions ];

export { Todo, Post, Users, Setting, Roles, Permissions, UsersRoles, RolesPermissions };

export default entities;
