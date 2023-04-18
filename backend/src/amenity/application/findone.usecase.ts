import { Amenity } from '../infrastructure/entity/amenity.entity';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';

export class FindOneAmenityUseCase {
    constructor(private readonly amenityRepository: AmenityRepository) {}

    async execute(id: number): Promise<Amenity> {
        return await this.amenityRepository.findOne(id);
    }
}
