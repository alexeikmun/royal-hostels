import { Injectable } from '@nestjs/common';
import { LocationsModel } from 'src/search/domain/model/locations.model';
import { Property } from 'src/property/infrastructure/entity/property.entity';

@Injectable()
export class SearchMapper {
    toDomain(entity: Property): LocationsModel {
        const domain = new LocationsModel();
        domain.city = entity.city;
        domain.country = entity.country;
        return domain;
    }
}
