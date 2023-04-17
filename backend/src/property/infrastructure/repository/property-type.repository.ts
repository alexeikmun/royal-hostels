import { Injectable, Scope } from '@nestjs/common';
import { CreatePropertyTypeDto } from '../dto/property-type.dto';
import { PropertyTypeRepositoryInterface } from '../../domain/repository/property-type.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyTypeMapper } from '../utils/property-type.mapper';
import { PropertyType } from '../entity/property-type.entity';

@Injectable({ scope: Scope.REQUEST })
export class PropertyTypeRepository implements PropertyTypeRepositoryInterface {
    private readonly propertyTypeMapper: PropertyTypeMapper;

    constructor(
        @InjectRepository(PropertyType)
        private readonly propertyTypeRepository: Repository<PropertyType>,
    ) {
        this.propertyTypeMapper = new PropertyTypeMapper();
    }

    async createType(type: CreatePropertyTypeDto): Promise<PropertyType> {
        const newType = this.propertyTypeMapper.toEntity(type);
        return await this.propertyTypeRepository.save(newType);
    }
}
