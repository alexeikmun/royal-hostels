import { CreateTypeDto } from '../infrastructure/dto/create-type.dto';
import { PropertyTypeModel } from '../domain/model/property-type.model';
import { PropertyTypeRepository } from '../infrastructure/repository/property-type.repository';
import { PropertyTypeMapper } from '../infrastructure/utils/type.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTypeUseCase {
    constructor(
        private readonly propertyTypeRepository: PropertyTypeRepository,
        private readonly propertyTypeMapper: PropertyTypeMapper,
    ) {}

    async execute(createTypeDto: CreateTypeDto): Promise<PropertyTypeModel> {
        const newType = await this.propertyTypeRepository.createType(
            createTypeDto,
        );
        return this.propertyTypeMapper.toDomain(newType);
    }
}
