import { CreateRoomDto } from '../infrastructure/dto/create-room.dto';
import { RoomModel } from '../domain/model/room.model';
import { RoomRepository } from '../infrastructure/repository/room.repository';
import { RoomMapper } from '../infrastructure/utils/room.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRoomUseCase {
    constructor(
        private readonly roomRepository: RoomRepository,
        private readonly roomMapper: RoomMapper,
    ) {}

    async execute(createRoomDto: CreateRoomDto): Promise<RoomModel> {
        const newRoom = await this.roomRepository.create(createRoomDto);
        return this.roomMapper.toDomain(newRoom);
    }
}
