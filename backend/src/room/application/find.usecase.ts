import { RoomRepository } from '../infrastructure/repository/room.repository';
import { Room } from '../infrastructure/entity/room.entity';

export class FindRoomsUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(): Promise<Room[]> {
        return await this.roomRepository.find();
    }
}
