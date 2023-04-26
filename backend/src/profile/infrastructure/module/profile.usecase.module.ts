import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateProfileUseCase,
    DeleteProfileUseCase,
    FindOneProfileUseCase,
    FindProfilesUseCase,
    UpdateProfileUseCase,
} from 'src/profile/application';

import { ProfileRepositoryModule } from './profile.repository.module';
import { ProfileRepository } from '../repository/profile.repository';

import { ProfileMapperModule } from './profile.mapper.module';
import { ProfileMapper } from '../utils/profile.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [ProfileRepositoryModule, ProfileMapperModule],
})
export class ProfileUsecaseModule {
    static GET_PROFILE_USECASES_PROXY = 'getProfileUsecasesProxy';
    static GET_PROFILES_USECASES_PROXY = 'getProfilesUsecasesProxy';
    static POST_PROFILE_USECASES_PROXY = 'postProfileUsecasesProxy';
    static DELETE_PROFILE_USECASES_PROXY = 'deleteProfileUsecasesProxy';
    static PUT_PROFILE_USECASES_PROXY = 'putProfileUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: ProfileUsecaseModule,
            providers: [
                {
                    inject: [ProfileRepository],
                    provide: ProfileUsecaseModule.GET_PROFILE_USECASES_PROXY,
                    useFactory: (repository: ProfileRepository) =>
                        new UseCaseProxy(new FindOneProfileUseCase(repository)),
                },
                {
                    inject: [ProfileRepository],
                    provide: ProfileUsecaseModule.GET_PROFILES_USECASES_PROXY,
                    useFactory: (repository: ProfileRepository) =>
                        new UseCaseProxy(new FindProfilesUseCase(repository)),
                },
                {
                    inject: [ProfileRepository, ProfileMapper],
                    provide: ProfileUsecaseModule.POST_PROFILE_USECASES_PROXY,
                    useFactory: (
                        repository: ProfileRepository,
                        profileMapper: ProfileMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateProfileUseCase(repository, profileMapper),
                        ),
                },
                {
                    inject: [ProfileRepository, ProfileMapper],
                    provide: ProfileUsecaseModule.PUT_PROFILE_USECASES_PROXY,
                    useFactory: (
                        repository: ProfileRepository,
                        profileMapper: ProfileMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateProfileUseCase(repository, profileMapper),
                        ),
                },
                {
                    inject: [ProfileRepository],
                    provide: ProfileUsecaseModule.DELETE_PROFILE_USECASES_PROXY,
                    useFactory: (repository: ProfileRepository) =>
                        new UseCaseProxy(new DeleteProfileUseCase(repository)),
                },
            ],
            exports: [
                ProfileUsecaseModule.GET_PROFILE_USECASES_PROXY,
                ProfileUsecaseModule.GET_PROFILES_USECASES_PROXY,
                ProfileUsecaseModule.POST_PROFILE_USECASES_PROXY,
                ProfileUsecaseModule.PUT_PROFILE_USECASES_PROXY,
                ProfileUsecaseModule.DELETE_PROFILE_USECASES_PROXY,
            ],
        };
    }
}
