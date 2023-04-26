import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateProfileDto,
    UpdateProfileDto,
} from 'src/profile/infrastructure/dto/profile.dto';
import { ProfileRepositoryInterface } from 'src/profile/domain/repository/profile.repository.interface';
import { Profile } from '../entity/profile.entity';
import { ProfileMapper } from '../utils/profile.mapper';

@Injectable({ scope: Scope.REQUEST })
export class ProfileRepository implements ProfileRepositoryInterface {
    private readonly mapper: ProfileMapper;

    constructor(
        @InjectRepository(Profile)
        private readonly repository: Repository<Profile>,
    ) {
        this.mapper = new ProfileMapper();
    }

    async create(profile: CreateProfileDto): Promise<Profile> {
        const newEntity = this.mapper.toEntity(profile);
        return await this.repository.save(newEntity);
    }

    async update(id: number, profile: UpdateProfileDto): Promise<Profile> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            profile,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<Profile> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<Profile[]> {
        return await this.repository.find();
    }
}
