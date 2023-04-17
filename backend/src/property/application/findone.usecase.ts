import { Property } from '../infrastructure/entity/property.entity';
import { PropertyRepository } from '../infrastructure/repository/property.repository';

export class FindOnePropertyUseCase {
    constructor(private readonly propertyRepository: PropertyRepository) {}

    async execute(id: number): Promise<Property> {
        return await this.propertyRepository.findOne(id);
    }
}
