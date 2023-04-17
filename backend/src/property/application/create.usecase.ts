import { CreatePropertyDto } from '../infrastructure/dto/property.dto';
import { PropertyModel } from '../domain/model/property.model';
import { PropertyRepository } from '../infrastructure/repository/property.repository';
import { PropertyMapper } from '../infrastructure/utils/property.mapper';

export class CreatePropertyUseCase {
    constructor(
        private readonly propertyRepository: PropertyRepository,
        private readonly propertyMapper: PropertyMapper,
    ) {}

    async execute(
        createPropertyDto: CreatePropertyDto,
    ): Promise<PropertyModel> {
        const newProperty = await this.propertyRepository.create(
            createPropertyDto,
        );
        return this.propertyMapper.toDomain(newProperty);
    }
}
