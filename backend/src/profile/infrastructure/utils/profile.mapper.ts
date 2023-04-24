import {
    CreateProfileDto,
    UpdateProfileDto,
} from 'src/profile/infrastructure/dto/profile.dto';
import { ProfileModel } from 'src/profile/domain/model/profile.model';
import { Profile } from '../entity/profile.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileMapper {
    toEntity(entityDto: CreateProfileDto | UpdateProfileDto): Profile {
        const entity = new Profile();
        entity.first_name = entityDto.first_name;
        entity.last_name = entityDto.last_name;
        entity.address = entityDto.address;
        entity.country = entityDto.country;
        entity.city = entityDto.city;
        entity.zipcode = entityDto.zipcode;
        entity.birthday = entityDto.birthday;
        entity.contact_number = entityDto.contact_number;
        entity.email = entityDto.email;
        return entity;
    }

    toEntityWithContext(
        entity: Profile,
        entityDto: CreateProfileDto | UpdateProfileDto,
    ): Profile {
        entity.first_name = entityDto.first_name;
        entity.last_name = entityDto.last_name;
        entity.address = entityDto.address;
        entity.city = entityDto.city;
        entity.country = entityDto.country;
        entity.zipcode = entityDto.zipcode;
        entity.birthday = entityDto.birthday;
        entity.contact_number = entityDto.contact_number;
        entity.email = entityDto.email;
        return entity;
    }

    toDomain(entity: Profile): ProfileModel {
        const domain = new ProfileModel();
        domain.id = entity.id;
        domain.first_name = entity.first_name;
        domain.last_name = entity.last_name;
        domain.address = entity.address;
        domain.city = entity.city;
        domain.country = entity.country;
        domain.zipcode = entity.zipcode;
        domain.birthday = entity.birthday;
        domain.contact_number = entity.contact_number;
        domain.email = entity.email;
        return domain;
    }
}
