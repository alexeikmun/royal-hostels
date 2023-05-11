import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { TokenPayload } from 'src/auth/domain/model/token.payload.model';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { LoginUseCases } from 'src/auth/application';
import { ConfigService } from '@nestjs/config';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh-token',
) {
    constructor(
        @Inject(ConfigService)
        private readonly config: ConfigService,
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        private readonly exceptionService: ExceptionsService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.Refresh;
                },
            ]),
            secretOrKey: config.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            passReqToCallback: true,
        });
    }

    async validate(request: Request, payload: TokenPayload) {
        const refreshToken = request.cookies?.Refresh;
        const user = this.loginUsecaseProxy
            .getInstance()
            .getUserIfRefreshTokenMatches(refreshToken, payload.email);
        if (!user) {
            this.exceptionService.UnauthorizedException({
                message: 'User not found or hash not correct',
            });
        }
        return user;
    }
}
