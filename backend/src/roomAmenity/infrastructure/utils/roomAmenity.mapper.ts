import {
    CreateRoomAmenityDto,
    UpdateRoomAmenityDto,
} from 'src/roomAmenity/infrastructure/dto/roomAmenity.dto';
import { RoomAmenityModel } from 'src/roomAmenity/domain/model/roomAmenity.model';
import { RoomAmenity } from '../entity/roomAmenity.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomAmenityMapper {
    toEntity(
        entityDto: CreateRoomAmenityDto | UpdateRoomAmenityDto,
    ): RoomAmenity {
        const entity = new RoomAmenity();
        entity.name = entityDto.name;
        return entity;
    }

    toEntityWithContext(
        entity: RoomAmenity,
        entityDto: CreateRoomAmenityDto | UpdateRoomAmenityDto,
    ): RoomAmenity {
        entity.name = entityDto.name;
        return entity;
    }

    toDomain(entity: RoomAmenity): RoomAmenityModel {
        const domain = new RoomAmenityModel();
        domain.id = entity.id;
        domain.name = entity.name;
        return domain;
    }
}
