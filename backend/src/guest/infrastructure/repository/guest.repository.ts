import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from 'src/guest/infrastructure/dto/create-guest.dto';
import { UpdateGuestDto } from 'src/guest/infrastructure/dto/update-guest.dto';
import { GuestRepositoryInterface } from 'src/guest/domain/repository/guest.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from '../entity/guest.entity';
import { GuestMapper } from '../utils/guest.mapper';

@Injectable()
export class GuestRepository implements GuestRepositoryInterface {
    private readonly guestMapper: GuestMapper;

    constructor(
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
    ) {
        this.guestMapper = new GuestMapper();
    }

    async create(guest: CreateGuestDto): Promise<Guest> {
        const newGuest = this.guestMapper.toEntity(guest);
        return this.guestRepository.save(newGuest);
    }

    async update(id: number, guest: UpdateGuestDto): Promise<Guest> {
        const currentGuest = await this.guestRepository.findOneBy({ id });
        const updatedGuest = this.guestMapper.toEntityWithContext(
            currentGuest,
            guest,
        );
        return this.guestRepository.save(updatedGuest);
    }

    async delete(id: number): Promise<void> {
        await this.guestRepository.delete(id);
    }

    async findOne(id: number): Promise<Guest> {
        return await this.guestRepository.findOneBy({ id });
    }
}
