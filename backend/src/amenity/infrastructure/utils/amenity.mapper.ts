import {
    CreateAmenityDto,
    UpdateAmenityDto,
} from 'src/amenity/infrastructure/dto/amenity.dto';
import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import { Amenity } from '../entity/amenity.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AmenityMapper {
    toEntity(entityDto: CreateAmenityDto | UpdateAmenityDto): Amenity {
        const entity = new Amenity();
        entity.name = entityDto.name;
        return entity;
    }

    toEntityWithContext(
        entity: Amenity,
        entityDto: CreateAmenityDto | UpdateAmenityDto,
    ): Amenity {
        entity.name = entityDto.name;
        return entity;
    }

    toDomain(entity: Amenity): AmenityModel {
        const domain = new AmenityModel();
        domain.id = entity.id;
        domain.name = entity.name;
        return domain;
    }
}
