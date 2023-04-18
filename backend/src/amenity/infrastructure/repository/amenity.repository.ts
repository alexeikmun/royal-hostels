import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateAmenityDto,
    UpdateAmenityDto,
} from 'src/amenity/infrastructure/dto/amenity.dto';
import { AmenityRepositoryInterface } from 'src/amenity/domain/repository/amenity.repository.interface';
import { Amenity } from '../entity/amenity.entity';
import { AmenityMapper } from '../utils/amenity.mapper';

@Injectable({ scope: Scope.REQUEST })
export class AmenityRepository implements AmenityRepositoryInterface {
    private readonly amenityMapper: AmenityMapper;

    constructor(
        @InjectRepository(Amenity)
        private readonly amenityRepository: Repository<Amenity>,
    ) {
        this.amenityMapper = new AmenityMapper();
    }

    async create(amenity: CreateAmenityDto): Promise<Amenity> {
        const newAmenity = this.amenityMapper.toEntity(amenity);
        return await this.amenityRepository.save(newAmenity);
    }

    async update(id: number, amenity: UpdateAmenityDto): Promise<Amenity> {
        const currentAmenity = await this.amenityRepository.findOneBy({ id });
        const updatedAmenity = this.amenityMapper.toEntityWithContext(
            currentAmenity,
            amenity,
        );
        return await this.amenityRepository.save(updatedAmenity);
    }

    async delete(id: number): Promise<void> {
        await this.amenityRepository.delete(id);
    }

    async findOne(id: number): Promise<Amenity> {
        return await this.amenityRepository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<Amenity[]> {
        return await this.amenityRepository.find();
    }
}
