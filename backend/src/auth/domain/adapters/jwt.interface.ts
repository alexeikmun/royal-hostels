import { UserModel } from 'src/user/domain/model/user.model';

export interface IJwtServicePayload {
    user?: UserModel;
    email?: string;
}

export interface IJwtService {
    checkToken(token: string): Promise<any>;
    createToken(
        payload: IJwtServicePayload,
        secret: string,
        expiresIn: string,
    ): string;
}
