import { Injectable } from '@nestjs/common';
import { Room } from '../infrastructure/entity/room.entity';
import { RoomRepository } from '../infrastructure/repository/room.repository';

@Injectable()
export class FindOneRoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(id: number): Promise<Room> {
        return await this.roomRepository.findOne(id);
    }
}
