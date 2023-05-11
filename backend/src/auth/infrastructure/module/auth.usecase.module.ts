import { DynamicModule, Module } from '@nestjs/common';

import {
    IsAuthenticatedUseCases,
    LoginUseCases,
    LogoutUseCases,
} from 'src/auth/application';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { JwtServiceModule } from './jwt.module';
import { BcryptModule } from './bcrypt.module';
import { ExceptionsModule } from '@shared/infrastructure/module/exceptions.module';
import { JwtTokenService } from '../services/jwt.service';
import { BcryptService } from '../services/bcrypt.service';
import { RepositoriesModule } from '@shared/infrastructure/module/repositories.module';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        JwtServiceModule,
        BcryptModule,
        RepositoriesModule,
        ExceptionsModule,
        PassportModule,
    ],
})
export class AuthUsecasesModule {
    // Auth
    static LOGIN_USECASES_PROXY = 'LoginUseCasesProxy';
    static IS_AUTHENTICATED_USECASES_PROXY = 'IsAuthenticatedUseCasesProxy';
    static LOGOUT_USECASES_PROXY = 'LogoutUseCasesProxy';

    static register(): DynamicModule {
        return {
            module: AuthUsecasesModule,
            providers: [
                {
                    inject: [
                        ConfigService,
                        JwtTokenService,
                        UserRepository,
                        BcryptService,
                    ],
                    provide: AuthUsecasesModule.LOGIN_USECASES_PROXY,
                    useFactory: (
                        config: ConfigService,
                        jwtTokenService: JwtTokenService,
                        userRepo: UserRepository,
                        bcryptService: BcryptService,
                    ) =>
                        new UseCaseProxy(
                            new LoginUseCases(
                                config,
                                jwtTokenService,
                                userRepo,
                                bcryptService,
                            ),
                        ),
                },
                {
                    inject: [UserRepository],
                    provide: AuthUsecasesModule.IS_AUTHENTICATED_USECASES_PROXY,
                    useFactory: (userRepo: UserRepository) =>
                        new UseCaseProxy(new IsAuthenticatedUseCases(userRepo)),
                },
                {
                    inject: [],
                    provide: AuthUsecasesModule.LOGOUT_USECASES_PROXY,
                    useFactory: () => new UseCaseProxy(new LogoutUseCases()),
                },
            ],
            exports: [
                AuthUsecasesModule.LOGIN_USECASES_PROXY,
                AuthUsecasesModule.IS_AUTHENTICATED_USECASES_PROXY,
                AuthUsecasesModule.LOGOUT_USECASES_PROXY,
            ],
        };
    }
}
