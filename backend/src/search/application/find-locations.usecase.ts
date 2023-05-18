import { PropertyRepository } from 'src/property/infrastructure/repository/property.repository';
import { LocationsModel } from '../domain/model/locations.model';

export class FindLocationsUseCase {
    constructor(private readonly repository: PropertyRepository) {}

    async execute(query: string): Promise<LocationsModel[]> {
        console.log('query', query);
        return await this.repository.findLocations(query);
    }
}
