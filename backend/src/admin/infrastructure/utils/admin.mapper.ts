import {
    CreateAdminDto,
    UpdateAdminDto,
} from 'src/admin/infrastructure/dto/admin.dto';
import { AdminModel } from 'src/admin/domain/model/admin.model';
import { Admin } from '../entity/admin.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/infrastructure/entity/user.entity';

@Injectable()
export class AdminMapper {
    toEntity(adminDto: CreateAdminDto | UpdateAdminDto): Admin {
        const entity = new Admin();
        entity.isSuper = adminDto.isSuper;
        entity.user = new User();
        entity.user.name = adminDto.name;
        entity.user.phone = adminDto?.phone;
        entity.user.city = adminDto?.city;
        entity.user.address = adminDto?.address;
        entity.user.email = adminDto.email;
        entity.user.country = adminDto?.country;
        entity.user.zipcode = adminDto?.zipcode;
        entity.user.password = adminDto.password;
        entity.user.role = adminDto.role;
        return entity;
    }

    toEntityWithContext(
        entity: Admin,
        adminDto: CreateAdminDto | UpdateAdminDto,
    ): Admin {
        entity.isSuper = adminDto.isSuper;
        entity.isSuper = adminDto.isSuper;
        entity.user.name = adminDto.name;
        entity.user.phone = adminDto.phone;
        entity.user.city = adminDto.city;
        entity.user.address = adminDto.address;
        entity.user.email = adminDto.email;
        entity.user.country = adminDto.country;
        entity.user.zipcode = adminDto.zipcode;
        entity.user.role = adminDto.role;
        return entity;
    }

    toDomain(entity: Admin): AdminModel {
        const domain = new AdminModel();
        domain.id = entity.id;
        domain.isSuper = entity.isSuper;
        domain.name = entity.user.name;
        domain.phone = entity.user?.phone;
        domain.city = entity.user?.city;
        domain.address = entity.user?.address;
        domain.email = entity.user?.email;
        domain.country = entity.user?.country;
        domain.zipcode = entity.user?.zipcode;
        domain.role = entity.user.role;
        return domain;
    }
}
