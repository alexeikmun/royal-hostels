import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../infrastructure/repository/room.repository';

@Injectable()
export class DeleteRoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(id: number): Promise<void> {
        await this.roomRepository.delete(id);
    }
}
