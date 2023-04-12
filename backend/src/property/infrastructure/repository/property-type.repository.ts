import { Injectable, Scope } from '@nestjs/common';
import { CreateTypeDto } from '../dto/create-type.dto';
import { PropertyTypeRepositoryInterface } from '../../domain/repository/property-type.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyTypeMapper } from '../utils/type.mapper';
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

    async createType(type: CreateTypeDto): Promise<PropertyType> {
        const newType = this.propertyTypeMapper.toEntity(type);
        return await this.propertyTypeRepository.save(newType);
    }
}
