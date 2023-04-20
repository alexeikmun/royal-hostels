import { Amenity } from '../infrastructure/entity/amenity.entity';
import { AmenityRepository } from '../infrastructure/repository/amenity.repository';

export class FindAmenitiesUseCase {
    constructor(private readonly repository: AmenityRepository) {}

    async execute(): Promise<Amenity[]> {
        return await this.repository.find();
    }
}
