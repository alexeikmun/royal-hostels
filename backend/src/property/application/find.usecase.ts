import { Property } from '../infrastructure/entity/property.entity';
import { PropertyRepository } from '../infrastructure/repository/property.repository';

export class FindPropertiesUseCase {
    constructor(private readonly propertyRepository: PropertyRepository) {}

    async execute(): Promise<Property[]> {
        return await this.propertyRepository.find();
    }
}
