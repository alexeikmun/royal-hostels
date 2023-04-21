import {
    CreateAdminDto,
    UpdateAdminDto,
} from 'src/admin/infrastructure/dto/admin.dto';
import { AdminModel } from 'src/admin/domain/model/admin.model';
import { Admin } from '../entity/admin.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminMapper {
    toEntity(entityDto: CreateAdminDto | UpdateAdminDto): Admin {
        const entity = new Admin();
        entity.name = entityDto.name;
        entity.isSuper = entityDto.isSuper;
        return entity;
    }

    toEntityWithContext(
        entity: Admin,
        entityDto: CreateAdminDto | UpdateAdminDto,
    ): Admin {
        entity.name = entityDto.name;
        entity.isSuper = entityDto.isSuper;
        return entity;
    }

    toDomain(entity: Admin): AdminModel {
        const domain = new AdminModel();
        domain.id = entity.id;
        domain.name = entity.name;
        domain.isSuper = entity.isSuper;
        return domain;
    }
}
