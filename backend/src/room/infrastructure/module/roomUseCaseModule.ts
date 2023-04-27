import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateRoomUseCase,
    DeleteRoomUseCase,
    FindOneRoomUseCase,
    FindRoomsUseCase,
    UpdateRoomUseCase,
} from 'src/room/application';

import { RoomRepositoryModule } from './room.repository.module';
import { RoomRepository } from '../repository/room.repository';

import { RoomMapperModule } from './room.mapper.module';
import { RoomMapper } from '../utils/room.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [RoomRepositoryModule, RoomMapperModule],
})
export class RoomUseCaseModule {
    static GET_ROOM_USECASES_PROXY = 'getRoomUsecasesProxy';
    static PUT_ROOM_USECASES_PROXY = 'putRoomUsecasesProxy';

    static POST_ROOM_USECASES_PROXY = 'postRoomUsecasesProxy';
    static DELETE_ROOM_USECASES_PROXY = 'deleteRoomUsecasesProxy';
    static GET_ROOMS_USECASES_PROXY = 'getRoomsUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: RoomUseCaseModule,
            providers: [
                {
                    inject: [RoomRepository],
                    provide: RoomUseCaseModule.GET_ROOM_USECASES_PROXY,
                    useFactory: (roomRepository: RoomRepository) =>
                        new UseCaseProxy(
                            new FindOneRoomUseCase(roomRepository),
                        ),
                },
                {
                    inject: [RoomRepository],
                    provide: RoomUseCaseModule.GET_ROOMS_USECASES_PROXY,
                    useFactory: (roomRepository: RoomRepository) =>
                        new UseCaseProxy(new FindRoomsUseCase(roomRepository)),
                },
                {
                    inject: [RoomRepository, RoomMapper],
                    provide: RoomUseCaseModule.POST_ROOM_USECASES_PROXY,
                    useFactory: (
                        roomRepository: RoomRepository,
                        roomMapper: RoomMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateRoomUseCase(roomRepository, roomMapper),
                        ),
                },
                {
                    inject: [RoomRepository, RoomMapper],
                    provide: RoomUseCaseModule.PUT_ROOM_USECASES_PROXY,
                    useFactory: (
                        roomRepository: RoomRepository,
                        roomMapper: RoomMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateRoomUseCase(roomRepository, roomMapper),
                        ),
                },
                {
                    inject: [RoomRepository],
                    provide: RoomUseCaseModule.DELETE_ROOM_USECASES_PROXY,
                    useFactory: (roomRepository: RoomRepository) =>
                        new UseCaseProxy(new DeleteRoomUseCase(roomRepository)),
                },
            ],
            exports: [
                RoomUseCaseModule.GET_ROOM_USECASES_PROXY,
                RoomUseCaseModule.GET_ROOMS_USECASES_PROXY,
                RoomUseCaseModule.POST_ROOM_USECASES_PROXY,
                RoomUseCaseModule.PUT_ROOM_USECASES_PROXY,
                RoomUseCaseModule.DELETE_ROOM_USECASES_PROXY,
            ],
        };
    }
}
