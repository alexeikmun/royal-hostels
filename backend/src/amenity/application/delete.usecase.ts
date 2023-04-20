import { AmenityRepository } from '../infrastructure/repository/amenity.repository';

export class DeleteAmenityUseCase {
    constructor(private readonly repository: AmenityRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
