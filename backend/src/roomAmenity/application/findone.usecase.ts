import { RoomAmenity } from '../infrastructure/entity/roomAmenity.entity';
import { RoomAmenityRepository } from '../infrastructure/repository/roomAmenity.repository';

export class FindOneRoomAmenityUseCase {
    constructor(private readonly repository: RoomAmenityRepository) {}

    async execute(id: number): Promise<RoomAmenity> {
        return await this.repository.findOne(id);
    }
}
