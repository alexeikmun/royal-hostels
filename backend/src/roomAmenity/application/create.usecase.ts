import { CreateRoomAmenityDto } from '../infrastructure/dto/roomAmenity.dto';
import { RoomAmenityModel } from '../domain/model/roomAmenity.model';
import { RoomAmenityRepository } from '../infrastructure/repository/roomAmenity.repository';
import { RoomAmenityMapper } from '../infrastructure/utils/roomAmenity.mapper';

export class CreateRoomAmenityUseCase {
    constructor(
        private readonly repository: RoomAmenityRepository,
        private readonly mapper: RoomAmenityMapper,
    ) {}

    async execute(createDto: CreateRoomAmenityDto): Promise<RoomAmenityModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
