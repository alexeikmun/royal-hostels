import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomAmenityRepository } from '../repository/roomAmenity.repository';
import { RoomAmenity } from '../entity/roomAmenity.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RoomAmenity])],
    providers: [RoomAmenityRepository],
    exports: [RoomAmenityRepository],
})
export class RoomAmenityRepositoryModule {}
