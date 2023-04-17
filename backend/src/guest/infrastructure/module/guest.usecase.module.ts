import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateGuestUseCase,
    DeleteGuestUseCase,
    FindOneGuestUseCase,
    UpdateGuestUseCase,
} from 'src/guest/application';

import { GuestRepositoryModule } from './guest.repository.module';
import { GuestRepository } from '../repository/guest.repository';

import { GuestMapperModule } from './guest.mapper.module';
import { GuestMapper } from '../utils/guest.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [GuestRepositoryModule, GuestMapperModule],
})
export class GuestUsecaseModule {
    static GET_GUEST_USECASES_PROXY = 'getGuestUsecasesProxy';
    static POST_GUEST_USECASES_PROXY = 'postGuestUsecasesProxy';
    static DELETE_GUEST_USECASES_PROXY = 'deleteGuestUsecasesProxy';
    static PUT_GUEST_USECASES_PROXY = 'putGuestUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: GuestUsecaseModule,
            providers: [
                {
                    inject: [GuestRepository],
                    provide: GuestUsecaseModule.GET_GUEST_USECASES_PROXY,
                    useFactory: (guestRepository: GuestRepository) =>
                        new UseCaseProxy(
                            new FindOneGuestUseCase(guestRepository),
                        ),
                },
                {
                    inject: [GuestRepository, GuestMapper],
                    provide: GuestUsecaseModule.POST_GUEST_USECASES_PROXY,
                    useFactory: (
                        guestRepository: GuestRepository,
                        guestMapper: GuestMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateGuestUseCase(
                                guestRepository,
                                guestMapper,
                            ),
                        ),
                },
                {
                    inject: [GuestRepository, GuestMapper],
                    provide: GuestUsecaseModule.PUT_GUEST_USECASES_PROXY,
                    useFactory: (
                        guestRepository: GuestRepository,
                        guestMapper: GuestMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateGuestUseCase(
                                guestRepository,
                                guestMapper,
                            ),
                        ),
                },
                {
                    inject: [GuestRepository],
                    provide: GuestUsecaseModule.DELETE_GUEST_USECASES_PROXY,
                    useFactory: (guestRepository: GuestRepository) =>
                        new UseCaseProxy(
                            new DeleteGuestUseCase(guestRepository),
                        ),
                },
            ],
            exports: [
                GuestUsecaseModule.GET_GUEST_USECASES_PROXY,
                GuestUsecaseModule.POST_GUEST_USECASES_PROXY,
                GuestUsecaseModule.PUT_GUEST_USECASES_PROXY,
                GuestUsecaseModule.DELETE_GUEST_USECASES_PROXY,
            ],
        };
    }
}
