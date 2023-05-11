import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateUserDto,
    UpdateUserDto,
} from 'src/user/infrastructure/dto/user.dto';
import { UserRepositoryInterface } from 'src/user/domain/repository/user.repository.interface';
import { User } from '../entity/user.entity';
import { UserMapper } from '../utils/user.mapper';

@Injectable({ scope: Scope.REQUEST })
export class UserRepository implements UserRepositoryInterface {
    private readonly mapper: UserMapper;

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {
        this.mapper = new UserMapper();
    }

    async create(user: CreateUserDto): Promise<User> {
        const newEntity = this.mapper.toEntity(user);
        return await this.repository.save(newEntity);
    }

    async update(id: number, user: UpdateUserDto): Promise<User> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            user,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<User> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.repository.findOne({
            where: {
                email,
            },
        });
    }

    async find(): Promise<User[]> {
        return await this.repository.find();
    }

    async updateLastLogin(email: string): Promise<void> {
        const user = await this.repository.findOneBy({ email });
        user.lastLogin = new Date();
    }

    async updateRefreshToken(email: string, refreshToken): Promise<void> {
        const user = await this.repository.findOneBy({ email });
        user.hashRefreshToken = refreshToken;
    }
}
