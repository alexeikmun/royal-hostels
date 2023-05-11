import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    canActivate(context) {
        // TODO: create a logic for checking if data comes from request is valid
        return true;
    }
}
