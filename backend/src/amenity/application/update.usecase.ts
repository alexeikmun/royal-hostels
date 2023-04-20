import { UpdateAmenityDto } from '../infrastructure/dto/amenity.dto';
import { AmenityModel } from '../domain/model/amenity.model';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';
import { AmenityMapper } from '../infrastructure/utils/amenity.mapper';

export class UpdateAmenityUseCase {
    constructor(
        private readonly repository: AmenityRepository,
        private readonly mapper: AmenityMapper,
    ) {}

    async execute(
        id: number,
        updateDto: UpdateAmenityDto,
    ): Promise<AmenityModel> {
        const entity = this.mapper.toEntity(updateDto);
        const updatedEntity = await this.repository.update(id, entity);
        return this.mapper.toDomain(updatedEntity);
    }
}
