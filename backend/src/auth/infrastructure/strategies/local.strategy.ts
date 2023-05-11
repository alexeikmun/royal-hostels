import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { LoginUseCases } from 'src/auth/application';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'locals') {
    constructor(
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        private readonly exceptionService: ExceptionsService,
    ) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string) {
        console.log('PASOOOO POR AQUIII');

        if (!email || !password) {
            this.exceptionService.UnauthorizedException();
        }
        console.log('PASOOOO POR AQUIII');
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
