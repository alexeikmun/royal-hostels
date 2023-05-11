import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { LoginUseCases } from 'src/auth/application';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        private readonly exceptionService: ExceptionsService,
        private moduleRef: ModuleRef,
    ) {
        super({ usernameField: 'email', passReqToCallback: true });
    }

    async validate(request: Request, email: string, password: string) {
        console.log('entering to validate');
        if (!email || !password) {
            this.exceptionService.UnauthorizedException();
        }
        const user = await this.loginUsecaseProxy
            .getInstance()
            .validateUserForLocalStragtegy(email, password);
        if (!user) {
            this.exceptionService.UnauthorizedException({
                message: 'Invalid email or password.',
            });
        }
        return user;
    }
}
