import { CreateAmenityDto } from '../infrastructure/dto/amenity.dto';
import { AmenityModel } from '../domain/model/amenity.model';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';
import { AmenityMapper } from '../infrastructure/utils/amenity.mapper';

export class CreateAmenityUseCase {
    constructor(
        private readonly repository: AmenityRepository,
        private readonly mapper: AmenityMapper,
    ) {}

    async execute(createDto: CreateAmenityDto): Promise<AmenityModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
