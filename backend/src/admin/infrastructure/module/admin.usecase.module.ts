import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateAdminUseCase,
    DeleteAdminUseCase,
    FindOneAdminUseCase,
    UpdateAdminUseCase,
    FindAdminsUseCase,
} from 'src/admin/application';

import { AdminRepositoryModule } from './admin.repository.module';
import { AdminRepository } from '../repository/admin.repository';

import { AdminMapperModule } from './admin.mapper.module';
import { AdminMapper } from '../utils/admin.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { BcryptService } from 'src/auth/infrastructure/services/bcrypt.service';
import { BcryptModule } from 'src/auth/infrastructure/module/bcrypt.module';
import { GetAdminPropertiesUseCase } from 'src/admin/application/get-admin-properties';

@Module({
    imports: [AdminRepositoryModule, AdminMapperModule, BcryptModule],
})
export class AdminUsecaseModule {
    static GET_ADMIN_USECASES_PROXY = 'getAdminUsecasesProxy';
    static GET_ADMINS_USECASES_PROXY = 'getAdminsUsecasesProxy';
    static POST_ADMIN_USECASES_PROXY = 'postAdminUsecasesProxy';
    static DELETE_ADMIN_USECASES_PROXY = 'deleteAdminUsecasesProxy';
    static GET_ADMIN_PROPERTIES_USECASES_PROXY =
        'getAdminPropertiesUsecasesProxy';
    static PUT_ADMIN_USECASES_PROXY = 'putAdminUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: AdminUsecaseModule,
            providers: [
                {
                    inject: [AdminRepository],
                    provide: AdminUsecaseModule.GET_ADMIN_USECASES_PROXY,
                    useFactory: (repository: AdminRepository) =>
                        new UseCaseProxy(new FindOneAdminUseCase(repository)),
                },
                {
                    inject: [AdminRepository],
                    provide: AdminUsecaseModule.GET_ADMINS_USECASES_PROXY,
                    useFactory: (repository: AdminRepository) =>
                        new UseCaseProxy(new FindAdminsUseCase(repository)),
                },
                {
                    inject: [AdminRepository, AdminMapper, BcryptService],
                    provide: AdminUsecaseModule.POST_ADMIN_USECASES_PROXY,
                    useFactory: (
                        repository: AdminRepository,
                        adminMapper: AdminMapper,
                        bcrypt: BcryptService,
                    ) =>
                        new UseCaseProxy(
                            new CreateAdminUseCase(
                                repository,
                                adminMapper,
                                bcrypt,
                            ),
                        ),
                },
                {
                    inject: [AdminRepository, AdminMapper],
                    provide: AdminUsecaseModule.PUT_ADMIN_USECASES_PROXY,
                    useFactory: (
                        repository: AdminRepository,
                        adminMapper: AdminMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateAdminUseCase(repository, adminMapper),
                        ),
                },
                {
                    inject: [AdminRepository],
                    provide: AdminUsecaseModule.DELETE_ADMIN_USECASES_PROXY,
                    useFactory: (repository: AdminRepository) =>
                        new UseCaseProxy(new DeleteAdminUseCase(repository)),
                },
                {
                    inject: [AdminRepository],
                    provide:
                        AdminUsecaseModule.GET_ADMIN_PROPERTIES_USECASES_PROXY,
                    useFactory: (repository: AdminRepository) =>
                        new UseCaseProxy(
                            new GetAdminPropertiesUseCase(repository),
                        ),
                },
            ],
            exports: [
                AdminUsecaseModule.GET_ADMIN_USECASES_PROXY,
                AdminUsecaseModule.GET_ADMINS_USECASES_PROXY,
                AdminUsecaseModule.POST_ADMIN_USECASES_PROXY,
                AdminUsecaseModule.PUT_ADMIN_USECASES_PROXY,
                AdminUsecaseModule.DELETE_ADMIN_USECASES_PROXY,
                AdminUsecaseModule.GET_ADMIN_PROPERTIES_USECASES_PROXY,
            ],
        };
    }
}
