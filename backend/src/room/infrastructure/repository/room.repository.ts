import { Injectable, Scope } from '@nestjs/common';
import { CreateRoomDto } from 'src/room/infrastructure/dto/create-room.dto';
import { UpdateRoomDto } from 'src/room/infrastructure/dto/update-room.dto';
import { RoomRepositoryInterface } from 'src/room/domain/repository/room.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from '../entity/room.entity';
import { RoomMapper } from '../utils/room.mapper';

@Injectable({ scope: Scope.REQUEST })
export class RoomRepository implements RoomRepositoryInterface {
    private readonly roomMapper: RoomMapper;

    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
    ) {
        this.roomMapper = new RoomMapper();
    }

    async create(room: CreateRoomDto): Promise<Room> {
        const newRoom = this.roomMapper.toEntity(room);
        return await this.roomRepository.save(newRoom);
    }

    async update(id: number, room: UpdateRoomDto): Promise<Room> {
        const currentRoom = await this.roomRepository.findOneBy({ id });
        const updatedRoom = this.roomMapper.toEntityWithContext(
            currentRoom,
            room,
        );
        return await this.roomRepository.save(updatedRoom);
    }

    async delete(id: number): Promise<void> {
        await this.roomRepository.delete(id);
    }

    async findOne(id: number): Promise<Room> {
        return await this.roomRepository.findOneBy({ id });
    }
}
