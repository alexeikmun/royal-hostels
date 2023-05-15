import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateAmenityDto,
    UpdateAmenityDto,
} from 'src/amenity/infrastructure/dto/amenity.dto';
import { AmenityRepositoryInterface } from 'src/amenity/domain/repository/amenity.repository.interface';
import { Amenity } from '../entity/amenity.entity';
import { AmenityMapper } from '../utils/amenity.mapper';

@Injectable()
export class AmenityRepository implements AmenityRepositoryInterface {
    private readonly mapper: AmenityMapper;

    constructor(
        @InjectRepository(Amenity)
        private readonly repository: Repository<Amenity>,
    ) {
        this.mapper = new AmenityMapper();
    }

    async create(amenity: CreateAmenityDto): Promise<Amenity> {
        const newEntity = this.mapper.toEntity(amenity);
        return await this.repository.save(newEntity);
    }

    async update(id: number, amenity: UpdateAmenityDto): Promise<Amenity> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            amenity,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<Amenity> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<Amenity[]> {
        return await this.repository.find();
    }
}
