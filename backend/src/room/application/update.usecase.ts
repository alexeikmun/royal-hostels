import { UpdateRoomDto } from '../infrastructure/dto/update-room.dto';
import { RoomModel } from '../domain/model/room.model';
import { RoomRepository } from '../infrastructure/repository/room.repository';
import { RoomMapper } from '../infrastructure/utils/room.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateRoomUseCase {
    constructor(
        private readonly roomRepository: RoomRepository,
        private readonly roomMapper: RoomMapper,
    ) {}

    async execute(id: number, room: UpdateRoomDto): Promise<RoomModel> {
        const roomEntity = this.roomMapper.toEntity(room);
        const updatedRoom = await this.roomRepository.update(id, roomEntity);
        return this.roomMapper.toDomain(updatedRoom);
    }
}
