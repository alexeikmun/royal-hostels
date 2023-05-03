import { Injectable, Dependencies } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/auth/domain/enum/role.enum';

@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
    constructor(private reflector: Reflector) {}

    matchRoles(roles: string[], userRole: string): boolean {
        return roles.some((role) => role === userRole || role === Role.ADMIN);
    }

    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return this.matchRoles(roles, user.role);
    }
}
