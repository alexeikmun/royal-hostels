import { PropertyRepository } from 'src/property/infrastructure/repository/property.repository';
import { SearchHostelsDto } from '../infrastructure/dto/search-hostels.dto';
import { HostelsModel } from '../domain/model/hostels.model';

export class FindHostelsUseCase {
    constructor(private readonly repository: PropertyRepository) {}

    async execute(query: SearchHostelsDto): Promise<HostelsModel[]> {
        console.log('query', query);
        return await this.repository.findHostels(query);
    }
}
