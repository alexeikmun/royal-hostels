import { RoomAmenityRepository } from '../infrastructure/repository/roomAmenity.repository';

export class DeleteRoomAmenityUseCase {
    constructor(private readonly repository: RoomAmenityRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
