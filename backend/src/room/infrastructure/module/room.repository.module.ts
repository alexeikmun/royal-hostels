import { Module } from '@nestjs/common';
import { Room } from '../entity/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomRepository } from '../repository/room.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Room])],
    providers: [RoomRepository],
    exports: [RoomRepository],
})
export class RoomRepositoryModule {}
