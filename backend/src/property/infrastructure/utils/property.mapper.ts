import { CreatePropertyDto } from 'src/property/infrastructure/dto/create-property.dto';
import { UpdatePropertyDto } from 'src/property/infrastructure/dto/update-property.dto';
import { PropertyModel } from 'src/property/domain/model/property.model';
import { Property } from '../entity/property.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyMapper {
    toEntity(property: CreatePropertyDto | UpdatePropertyDto): Property {
        const propertyEntity = new Property();
        propertyEntity.name = property.name;
        propertyEntity.email = property.email;
        propertyEntity.phone = property.phone;
        propertyEntity.city = property.city;
        propertyEntity.address = property.address;
        propertyEntity.country = property.country;
        propertyEntity.zipcode = property.zipcode;
        propertyEntity.typeId = property.typeId;
        return propertyEntity;
    }

    toEntityWithContext(
        propertyEntity: Property,
        propertyDto: CreatePropertyDto | UpdatePropertyDto,
    ): Property {
        propertyEntity.name = propertyDto.name;
        propertyEntity.email = propertyDto.email;
        propertyEntity.phone = propertyDto.phone;
        propertyEntity.city = propertyDto.city;
        propertyEntity.address = propertyDto.address;
        propertyEntity.country = propertyDto.country;
        propertyEntity.zipcode = propertyDto.zipcode;
        propertyEntity.typeId = propertyDto.typeId;
        return propertyEntity;
    }

    toDomain(property: Property): PropertyModel {
        const propertyDomain = new PropertyModel();
        propertyDomain.id = property.id;
        propertyDomain.name = property.name;
        propertyDomain.email = property.email;
        propertyDomain.phone = property.phone;
        propertyDomain.city = property.city;
        propertyDomain.address = property.address;
        propertyDomain.country = property.country;
        propertyDomain.zipcode = property.zipcode;
        propertyDomain.typeId = property.typeId;
        return propertyDomain;
    }
}
