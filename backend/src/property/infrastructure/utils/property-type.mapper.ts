import { CreatePropertyTypeDto } from 'src/property/infrastructure/dto/create-property-type.dto';
import { PropertyTypeModel } from 'src/property/domain/model/property-type.model';
import { PropertyType } from '../entity/property-type.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyTypeMapper {
    toEntity(type: CreatePropertyTypeDto): PropertyType {
        const propertyTypeEntity = new PropertyType();
        propertyTypeEntity.name = type.name;
        return propertyTypeEntity;
    }

    toEntityWithContext(
        propertyTypeEntity: PropertyType,
        propertyTypeDto: CreatePropertyTypeDto,
    ): PropertyType {
        propertyTypeEntity.name = propertyTypeDto.name;
        return propertyTypeEntity;
    }

    toDomain(type: PropertyType): PropertyTypeModel {
        const propertyTypeDomain = new PropertyTypeModel();
        propertyTypeDomain.id = type.id;
        propertyTypeDomain.name = type.name;
        return propertyTypeDomain;
    }
}
