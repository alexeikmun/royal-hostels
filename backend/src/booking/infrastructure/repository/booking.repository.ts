import { Injectable } from '@nestjs/common';
import {
    CreateBookingDto,
    UpdateBookingDto,
} from 'src/booking/infrastructure/dto/booking.dto';
import { BookingRepositoryInterface } from 'src/booking/domain/repository/booking.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entity/booking.entity';
import { BookingMapper } from '../utils/booking.mapper';

@Injectable()
export class BookingRepository implements BookingRepositoryInterface {
    private readonly bookingMapper: BookingMapper;

    constructor(
        @InjectRepository(Booking)
        private readonly bookingRepository: Repository<Booking>,
    ) {
        this.bookingMapper = new BookingMapper();
    }

    async create(booking: CreateBookingDto): Promise<Booking> {
        const newBooking = this.bookingMapper.toEntity(booking);
        return await this.bookingRepository.save(newBooking);
    }

    async update(id: number, booking: UpdateBookingDto): Promise<Booking> {
        const currentBooking = await this.bookingRepository.findOneBy({ id });
        const updatedBooking = this.bookingMapper.toEntityWithContext(
            currentBooking,
            booking,
        );
        return await this.bookingRepository.save(updatedBooking);
    }

    async delete(id: number): Promise<void> {
        await this.bookingRepository.delete(id);
    }

    async findOne(id: number): Promise<Booking> {
        return await this.bookingRepository.findOne({
            where: {
                id,
            },
            relations: ['status', 'rooms', 'comment'],
        });
    }

    async find(): Promise<Booking[]> {
        return await this.bookingRepository.find({
            relations: ['status', 'rooms', 'comment'],
        });
    }
}
