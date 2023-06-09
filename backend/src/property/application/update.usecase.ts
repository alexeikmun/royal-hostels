import { UpdatePropertyDto } from '../infrastructure/dto/property.dto';
import { PropertyModel } from '../domain/model/property.model';
import { PropertyRepository } from '../infrastructure/repository/property.repository';
import { PropertyMapper } from '../infrastructure/utils/property.mapper';

export class UpdatePropertyUseCase {
    constructor(
        private readonly propertyRepository: PropertyRepository,
        private readonly propertyMapper: PropertyMapper,
    ) {}

    async execute(
        id: number,
        property: UpdatePropertyDto,
    ): Promise<PropertyModel> {
        const updatedProperty = await this.propertyRepository.update(
            id,
            property,
        );
        return this.propertyMapper.toDomain(updatedProperty);
    }
}
