import { RoomAmenity } from '../infrastructure/entity/roomAmenity.entity';
import { RoomAmenityRepository } from '../infrastructure/repository/roomAmenity.repository';

export class FindRoomAmenitiesUseCase {
    constructor(private readonly repository: RoomAmenityRepository) {}

    async execute(): Promise<RoomAmenity[]> {
        return await this.repository.find();
    }
}
