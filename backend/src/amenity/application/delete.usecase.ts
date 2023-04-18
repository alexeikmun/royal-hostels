import { AmenityRepository } from '../infrastructure/repository/amenity.repository';

export class DeleteAmenityUseCase {
    constructor(private readonly amenityRepository: AmenityRepository) {}

    async execute(id: number): Promise<void> {
        await this.amenityRepository.delete(id);
    }
}
