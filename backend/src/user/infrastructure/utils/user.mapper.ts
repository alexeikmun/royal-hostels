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
        entity.name = entityDto.name;
        entity.address = entityDto.address;
        entity.country = entityDto.country;
        entity.city = entityDto.city;
        entity.zipcode = entityDto.zipcode;
        entity.birthday = entityDto.birthday;
        entity.phone = entityDto.phone;
        entity.email = entityDto.email;
        return entity;
    }

    toEntityWithContext(
        entity: User,
        entityDto: CreateUserDto | UpdateUserDto,
    ): User {
        entity.name = entityDto.name;
        entity.address = entityDto.address;
        entity.city = entityDto.city;
        entity.country = entityDto.country;
        entity.zipcode = entityDto.zipcode;
        entity.birthday = entityDto.birthday;
        entity.phone = entityDto.phone;
        entity.email = entityDto.email;
        return entity;
    }

    toDomain(entity: User): UserModel {
        const domain = new UserModel();
        domain.id = entity.id;
        domain.name = entity.name;
        domain.address = entity.address;
        domain.city = entity.city;
        domain.country = entity.country;
        domain.zipcode = entity.zipcode;
        domain.birthday = entity.birthday;
        domain.phone = entity.phone;
        domain.email = entity.email;
        return domain;
    }
}
