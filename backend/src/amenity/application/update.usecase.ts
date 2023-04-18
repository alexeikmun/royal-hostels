import { UpdateAmenityDto } from '../infrastructure/dto/amenity.dto';
import { AmenityModel } from '../domain/model/amenity.model';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';
import { AmenityMapper } from '../infrastructure/utils/amenity.mapper';

export class UpdateAmenityUseCase {
    constructor(
        private readonly amenityRepository: AmenityRepository,
        private readonly amenityMapper: AmenityMapper,
    ) {}

    async execute(
        id: number,
        amenity: UpdateAmenityDto,
    ): Promise<AmenityModel> {
        const amenityEntity = this.amenityMapper.toEntity(amenity);
        const updatedAmenity = await this.amenityRepository.update(
            id,
            amenityEntity,
        );
        return this.amenityMapper.toDomain(updatedAmenity);
    }
}
