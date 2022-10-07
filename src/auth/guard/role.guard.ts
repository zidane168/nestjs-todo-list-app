
import { 
    CanActivate, 
    ExecutionContext,
    Injectable, 
    HttpStatus,
    HttpException,
} from "@nestjs/common";

@Injectable()
export class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): any {
       
        const currentFunctionName: string = context.getHandler().name;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const currentMethod = request.method;
 
        // users - usersRoles - roles - rolesPermissions - permissions
        for(let i = 0; i < user.usersRoles.length; i++) {

            let rolesPermissions = user.usersRoles[i].roles.rolesPermissions;
            // console.log(rolesPermissions);
            for(let j = 0; j < rolesPermissions.length ; j++) {
                // console.log(rolesPermissions[j].permissions);

                let { method, functionName } = rolesPermissions[j].permissions;

                if (currentFunctionName === functionName && currentMethod === method) {
                    return true;
                }
            }
        }

        // console.log(user.usersRoles[0].usersId);
        // console.log(user.usersRoles[0].roles);
        // console.log(user.usersRoles[1].usersId);
        // console.log(user.usersRoles[1].roles);

        // https://programmer.group/nestjs-learning-tour-routing-guard.html
        // const request = context.switchToHttp().getRequest();
        // const user = request.user; // Read the user of the request object, which can be set by middleware (as shown earlier in this article)
        // const hasRole = () => user.roles.some((role) => roles.includes(role));
        // return user && user.roles && hasRole();
        
        throw new HttpException("Unauthorized Access, your permission not allow!", HttpStatus.UNAUTHORIZED);
    }
}