import { CreateRoomDto } from 'src/room/infrastructure/dto/create-room.dto';
import { UpdateRoomDto } from 'src/room/infrastructure/dto/update-room.dto';
import { RoomModel } from 'src/room/domain/model/room.model';
import { Room } from '../entity/room.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomMapper {
    toEntity(room: CreateRoomDto | UpdateRoomDto): Room {
        const roomEntity = new Room();
        roomEntity.price = room.price;
        roomEntity.description = room.description;
        roomEntity.name = room.name;
        roomEntity.maxGuests = room.maxGuests;
        roomEntity.amenities = room.amenities;
        roomEntity.propertyId = room.propertyId;
        return roomEntity;
    }

    toEntityWithContext(
        roomEntity: Room,
        roomDto: CreateRoomDto | UpdateRoomDto,
    ): Room {
        roomEntity.price = roomDto.price;
        roomEntity.description = roomDto.description;
        roomEntity.name = roomDto.name;
        roomEntity.maxGuests = roomDto.maxGuests;
        roomEntity.amenities = roomDto.amenities;
        roomEntity.propertyId = roomDto.propertyId;
        return roomEntity;
    }

    toDomain(room: Room): RoomModel {
        const roomDomain = new RoomModel();
        roomDomain.price = room.price;
        roomDomain.description = room.description;
        roomDomain.name = room.name;
        roomDomain.maxGuests = room.maxGuests;
        roomDomain.amenities = room.amenities;
        roomDomain.propertyId = room.propertyId;
        return roomDomain;
    }
}
