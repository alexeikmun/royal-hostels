import {
    CreateUserDto,
    UpdateUserDto,
} from 'src/user/infrastructure/dto/user.dto';
import { UserModel } from 'src/user/domain/model/user.model';
import { User } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMapper {
    toEntity(entityDto: CreateUserDto | UpdateUserDto): User {
        const entity = new User();
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
        entity: User,
        entityDto: CreateUserDto | UpdateUserDto,
    ): User {
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

    toDomain(entity: User): UserModel {
        const domain = new UserModel();
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
