import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateRoomAmenityUseCase,
    DeleteRoomAmenityUseCase,
    FindOneRoomAmenityUseCase,
    FindRoomAmenitiesUseCase,
    UpdateRoomAmenityUseCase,
} from 'src/roomAmenity/application';

import { RoomAmenityRepositoryModule } from './roomAmenity.repository.module';
import { RoomAmenityRepository } from '../repository/roomAmenity.repository';

import { RoomAmenityMapperModule } from './roomAmenity.mapper.module';
import { RoomAmenityMapper } from '../utils/roomAmenity.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [RoomAmenityRepositoryModule, RoomAmenityMapperModule],
})
export class RoomAmenityUsecaseModule {
    static GET_ROOM_AMENITY_USECASES_PROXY = 'getRoomAmenityUsecasesProxy';
    static GET_AMENITIES_USECASES_PROXY = 'getRoomAmenitiesUsecasesProxy';
    static POST_ROOM_AMENITY_USECASES_PROXY = 'postRoomAmenityUsecasesProxy';
    static DELETE_ROOM_AMENITY_USECASES_PROXY =
        'deleteRoomAmenityUsecasesProxy';
    static PUT_ROOM_AMENITY_USECASES_PROXY = 'putRoomAmenityUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: RoomAmenityUsecaseModule,
            providers: [
                {
                    inject: [RoomAmenityRepository],
                    provide:
                        RoomAmenityUsecaseModule.GET_ROOM_AMENITY_USECASES_PROXY,
                    useFactory: (repository: RoomAmenityRepository) =>
                        new UseCaseProxy(
                            new FindOneRoomAmenityUseCase(repository),
                        ),
                },
                {
                    inject: [RoomAmenityRepository],
                    provide:
                        RoomAmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY,
                    useFactory: (repository: RoomAmenityRepository) =>
                        new UseCaseProxy(
                            new FindRoomAmenitiesUseCase(repository),
                        ),
                },
                {
                    inject: [RoomAmenityRepository, RoomAmenityMapper],
                    provide:
                        RoomAmenityUsecaseModule.POST_ROOM_AMENITY_USECASES_PROXY,
                    useFactory: (
                        repository: RoomAmenityRepository,
                        roomAmenityMapper: RoomAmenityMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateRoomAmenityUseCase(
                                repository,
                                roomAmenityMapper,
                            ),
                        ),
                },
                {
                    inject: [RoomAmenityRepository, RoomAmenityMapper],
                    provide:
                        RoomAmenityUsecaseModule.PUT_ROOM_AMENITY_USECASES_PROXY,
                    useFactory: (
                        repository: RoomAmenityRepository,
                        roomAmenityMapper: RoomAmenityMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateRoomAmenityUseCase(
                                repository,
                                roomAmenityMapper,
                            ),
                        ),
                },
                {
                    inject: [RoomAmenityRepository],
                    provide:
                        RoomAmenityUsecaseModule.DELETE_ROOM_AMENITY_USECASES_PROXY,
                    useFactory: (repository: RoomAmenityRepository) =>
                        new UseCaseProxy(
                            new DeleteRoomAmenityUseCase(repository),
                        ),
                },
            ],
            exports: [
                RoomAmenityUsecaseModule.GET_ROOM_AMENITY_USECASES_PROXY,
                RoomAmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY,
                RoomAmenityUsecaseModule.POST_ROOM_AMENITY_USECASES_PROXY,
                RoomAmenityUsecaseModule.PUT_ROOM_AMENITY_USECASES_PROXY,
                RoomAmenityUsecaseModule.DELETE_ROOM_AMENITY_USECASES_PROXY,
            ],
        };
    }
}
