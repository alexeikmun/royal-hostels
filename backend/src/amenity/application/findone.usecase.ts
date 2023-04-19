import { Amenity } from '../infrastructure/entity/amenity.entity';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';

export class FindOneAmenityUseCase {
    constructor(private readonly repository: AmenityRepository) {}

    async execute(id: number): Promise<Amenity> {
        return await this.repository.findOne(id);
    }
}
