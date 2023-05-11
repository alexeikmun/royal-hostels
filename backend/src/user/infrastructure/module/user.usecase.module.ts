import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateUserUseCase,
    DeleteUserUseCase,
    FindOneUserUseCase,
    FindUsersUseCase,
    UpdateUserUseCase,
} from 'src/user/application';

import { UserRepositoryModule } from './user.repository.module';
import { UserRepository } from '../repository/user.repository';

import { UserMapperModule } from './user.mapper.module';
import { UserMapper } from '../utils/user.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { AuthUsecasesModule } from 'src/auth/infrastructure/module/auth.usecase.module';

@Module({
    imports: [UserRepositoryModule, UserMapperModule],
})
export class UserUsecaseModule {
    static GET_USER_USECASES_PROXY = 'getUserUsecasesProxy';
    static GET_USERS_USECASES_PROXY = 'getUsersUsecasesProxy';
    static POST_USER_USECASES_PROXY = 'postUserUsecasesProxy';
    static DELETE_USER_USECASES_PROXY = 'deleteUserUsecasesProxy';
    static PUT_USER_USECASES_PROXY = 'putUserUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: UserUsecaseModule,
            providers: [
                {
                    inject: [UserRepository],
                    provide: UserUsecaseModule.GET_USER_USECASES_PROXY,
                    useFactory: (repository: UserRepository) =>
                        new UseCaseProxy(new FindOneUserUseCase(repository)),
                },
                {
                    inject: [UserRepository],
                    provide: UserUsecaseModule.GET_USERS_USECASES_PROXY,
                    useFactory: (repository: UserRepository) =>
                        new UseCaseProxy(new FindUsersUseCase(repository)),
                },
                {
                    inject: [UserRepository, UserMapper],
                    provide: UserUsecaseModule.POST_USER_USECASES_PROXY,
                    useFactory: (
                        repository: UserRepository,
                        userMapper: UserMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateUserUseCase(repository, userMapper),
                        ),
                },
                {
                    inject: [UserRepository, UserMapper],
                    provide: UserUsecaseModule.PUT_USER_USECASES_PROXY,
                    useFactory: (
                        repository: UserRepository,
                        userMapper: UserMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateUserUseCase(repository, userMapper),
                        ),
                },
                {
                    inject: [UserRepository],
                    provide: UserUsecaseModule.DELETE_USER_USECASES_PROXY,
                    useFactory: (repository: UserRepository) =>
                        new UseCaseProxy(new DeleteUserUseCase(repository)),
                },
            ],
            exports: [
                UserUsecaseModule.GET_USER_USECASES_PROXY,
                UserUsecaseModule.GET_USERS_USECASES_PROXY,
                UserUsecaseModule.POST_USER_USECASES_PROXY,
                UserUsecaseModule.PUT_USER_USECASES_PROXY,
                UserUsecaseModule.DELETE_USER_USECASES_PROXY,
            ],
        };
    }
}
