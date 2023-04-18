import { Module } from '@nestjs/common';
import { RoomMapper } from '../utils/room.mapper';

@Module({
    providers: [RoomMapper],
    exports: [RoomMapper],
})
export class RoomMapperModule {}
