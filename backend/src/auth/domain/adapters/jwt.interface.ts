import { UserModel } from 'src/user/domain/model/user.model';

export interface IJwtServicePayloadToken {
    user: UserModel;
}

export interface IJwtServicePayloadRefreshToken {
    email: string;
}

export interface IJwtService {
    checkToken(token: string): Promise<any>;
    createToken(
        payload: IJwtServicePayloadToken | IJwtServicePayloadRefreshToken,
        secret: string,
        expiresIn: string,
    ): string;
}
