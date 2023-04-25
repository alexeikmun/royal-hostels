import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateRoomAmenityDto,
    UpdateRoomAmenityDto,
} from 'src/roomAmenity/infrastructure/dto/roomAmenity.dto';
import { RoomAmenityRepositoryInterface } from 'src/roomAmenity/domain/repository/roomAmenity.repository.interface';
import { RoomAmenity } from '../entity/roomAmenity.entity';
import { RoomAmenityMapper } from '../utils/roomAmenity.mapper';

@Injectable({ scope: Scope.REQUEST })
export class RoomAmenityRepository implements RoomAmenityRepositoryInterface {
    private readonly mapper: RoomAmenityMapper;

    constructor(
        @InjectRepository(RoomAmenity)
        private readonly repository: Repository<RoomAmenity>,
    ) {
        this.mapper = new RoomAmenityMapper();
    }

    async create(roomAmenity: CreateRoomAmenityDto): Promise<RoomAmenity> {
        const newEntity = this.mapper.toEntity(roomAmenity);
        return await this.repository.save(newEntity);
    }

    async update(
        id: number,
        roomAmenity: UpdateRoomAmenityDto,
    ): Promise<RoomAmenity> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            roomAmenity,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<RoomAmenity> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<RoomAmenity[]> {
        return await this.repository.find();
    }
}
