import { Module } from '@nestjs/common';
import { RoomAmenityMapper } from '../utils/roomAmenity.mapper';

@Module({
    providers: [RoomAmenityMapper],
    exports: [RoomAmenityMapper],
})
export class RoomAmenityMapperModule {}
