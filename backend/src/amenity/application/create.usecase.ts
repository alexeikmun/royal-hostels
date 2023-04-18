import { CreateAmenityDto } from '../infrastructure/dto/amenity.dto';
import { AmenityModel } from '../domain/model/amenity.model';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';
import { AmenityMapper } from '../infrastructure/utils/amenity.mapper';

export class CreateAmenityUseCase {
    constructor(
        private readonly amenityRepository: AmenityRepository,
        private readonly amenityMapper: AmenityMapper,
    ) {}

    async execute(createAmenityDto: CreateAmenityDto): Promise<AmenityModel> {
        const newAmenity = await this.amenityRepository.create(
            createAmenityDto,
        );
        return this.amenityMapper.toDomain(newAmenity);
    }
}
