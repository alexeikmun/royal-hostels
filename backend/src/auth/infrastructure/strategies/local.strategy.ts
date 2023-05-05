import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthUsecasesModule } from '../module/auth.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { LoginUseCases } from 'src/auth/application';
import { ExceptionsService } from '@shared/infrastructure/service/exceptions.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(AuthUsecasesModule.LOGIN_USECASES_PROXY)
        private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
        private readonly exceptionService: ExceptionsService,
    ) {
        super();
    }

    async validate(username: string, password: string) {
        if (!username || !password) {
            this.exceptionService.UnauthorizedException();
        }
        const user = await this.loginUsecaseProxy
            .getInstance()
            .validateUserForLocalStragtegy(username, password);
        if (!user) {
            this.exceptionService.UnauthorizedException({
                message: 'Invalid username or password.',
            });
        }
        return user;
    }
}
