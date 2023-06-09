import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateAdminDto,
    UpdateAdminDto,
} from 'src/admin/infrastructure/dto/admin.dto';
import { AdminRepositoryInterface } from 'src/admin/domain/repository/admin.repository.interface';
import { Admin } from '../entity/admin.entity';
import { AdminMapper } from '../utils/admin.mapper';
import { Property } from 'src/property/infrastructure/entity/property.entity';

@Injectable()
export class AdminRepository implements AdminRepositoryInterface {
    private readonly mapper: AdminMapper;

    constructor(
        @InjectRepository(Admin)
        private readonly repository: Repository<Admin>,
    ) {
        this.mapper = new AdminMapper();
    }

    async create(admin: CreateAdminDto, password: string): Promise<Admin> {
        const newEntity = this.mapper.toEntity(admin);
        newEntity.user.password = password;
        return await this.repository.save(newEntity);
    }

    async update(id: number, admin: UpdateAdminDto): Promise<Admin> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            admin,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<Admin> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<Admin[]> {
        return await this.repository.find();
    }

    // Getting all properties from admin
    async getAdminProperties(id: number): Promise<Property[]> {
        const admin = await this.repository.findOne({
            relations: ['properties'],
            where: { id: id },
        });

        return admin.properties;
    }
}
