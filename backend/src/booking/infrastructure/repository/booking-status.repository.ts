import { Injectable } from '@nestjs/common';
import { CreateBookingStatusDto } from '../dto/booking-status.dto';
import { BookingStatusRepositoryInterface } from '../../domain/repository/booking-status.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingStatusMapper } from '../utils/booking-status.mapper';
import { BookingStatus } from '../entity/booking-status.entity';

@Injectable()
export class BookingStatusRepository
    implements BookingStatusRepositoryInterface
{
    private readonly bookingStatusMapper: BookingStatusMapper;

    constructor(
        @InjectRepository(BookingStatus)
        private readonly bookingStatusRepository: Repository<BookingStatus>,
    ) {
        this.bookingStatusMapper = new BookingStatusMapper();
    }

    async createBookingStatus(
        createBookingStatusDto: CreateBookingStatusDto,
    ): Promise<BookingStatus> {
        const bookingStatus = this.bookingStatusMapper.toEntity(
            createBookingStatusDto,
        );
        return await this.bookingStatusRepository.save(bookingStatus);
    }
}
