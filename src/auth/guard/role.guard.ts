
import { 
    CanActivate, 
    ExecutionContext,
    Injectable, 
    HttpStatus,
    HttpException,
} from "@nestjs/common";


// Users {
//     id: '1',
//     username: 'vilh',
//     password: '$2b$12$gWxjBaBwvYHdZCO.BhyM5eLQg3TsIVKcm/cZ7DunwY87nnogGwB3q',
//     enabled: true,
//     created: 2022-10-13T00:41:20.561Z,
//     created_by: null,
//     modified: 2022-10-13T00:41:20.561Z,
//     modified_by: null,
//     roles: [
//       Roles {
//         id: '1',
//         slug: 'admin',
//         name: 'admin',
//         enabled: true,
//         created: 2022-10-13T00:41:20.561Z,
//         created_by: null,
//         modified: 2022-10-13T00:41:20.561Z,
//         modified_by: null,
//         permissions: [Array]
//       },
//       Roles {
//         id: '2',
//         slug: 'company-admin',
//         name: 'Company Admin',
//         enabled: true,
//         created: 2022-10-13T00:41:20.561Z,
//         created_by: null,
//         modified: 2022-10-13T00:41:20.561Z,
//         modified_by: null,
//         permissions: [Array]
//       }
//     ]
//   }
@Injectable()
export class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): any {
       
        const currentFunctionName: string = context.getHandler().name;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const currentMethod = request.method;
        const url = request.url; 
        for (let i = 0; i < user.roles.length; i++) {

            let permissions = user.roles[i].permissions;  
            for(let j = 0; j < permissions.length; j++) { 
 
                let { method, controller } = permissions[j]; 

                // convert to detail function/method
                if (url.indexOf(controller) > 0) {      // >0: found; belong to controllers and then check method is allow?
 
                    if (method === 'add') {
                        if (currentMethod === 'POST') {
                            return true;
                        }
                    }
    
                    if (method === 'edit') {
                        if (currentMethod === 'PATCH' || currentMethod === 'PUT' ) {
                            return true;
                        }
                    }
    
                    if (method === 'view') {
                        if (currentMethod === 'GET' ) { 
                            return true;
                        }
                    }
    
                    if (method === 'delete') {
                        if (currentMethod === 'delete' ) {
                            return true;
                        }
                    } 
                } 
            }
        }
 

        // https://programmer.group/nestjs-learning-tour-routing-guard.html
        // const request = context.switchToHttp().getRequest();
        // const user = request.user; // Read the user of the request object, which can be set by middleware (as shown earlier in this article)
        // const hasRole = () => user.roles.some((role) => roles.includes(role));
        // return user && user.roles && hasRole();
        
        throw new HttpException("Unauthorized Access, your permission not allow!", HttpStatus.UNAUTHORIZED);
    }
}