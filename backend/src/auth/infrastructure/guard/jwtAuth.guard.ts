import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context) {
        // TODO: create a logic for checking if date comes from token is expired
        return true;
    }
}
