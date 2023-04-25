import { UpdateRoomAmenityDto } from '../infrastructure/dto/roomAmenity.dto';
import { RoomAmenityModel } from '../domain/model/roomAmenity.model';
import { RoomAmenityRepository } from '../infrastructure/repository/roomAmenity.repository';
import { RoomAmenityMapper } from '../infrastructure/utils/roomAmenity.mapper';

export class UpdateRoomAmenityUseCase {
    constructor(
        private readonly repository: RoomAmenityRepository,
        private readonly mapper: RoomAmenityMapper,
    ) {}

    async execute(
        id: number,
        updateDto: UpdateRoomAmenityDto,
    ): Promise<RoomAmenityModel> {
        const entity = this.mapper.toEntity(updateDto);
        const updatedEntity = await this.repository.update(id, entity);
        return this.mapper.toDomain(updatedEntity);
    }
}
