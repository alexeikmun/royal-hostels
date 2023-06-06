import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { LoginUseCases } from 'src/auth/application';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        private readonly exceptionService: ExceptionsService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.Authentication;
                },
                ExtractJwt.fromAuthHeaderAsBearerToken(),
                ExtractJwt.fromHeader('Authorization'),
                ExtractJwt.fromHeader('authorization'),
            ]),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any) {
        const user = await this.loginUsecaseProxy
            .getInstance()
            .validateUserForJWTStragtegy(payload.email);

        if (!user) {
            this.exceptionService.unauthorizedException({
                message: 'User not found',
            });
        }

        if (!user.hashRefreshToken) {
            this.exceptionService.unauthorizedException({
                message: 'Session not found',
            });
        }

        return user;
    }
}
