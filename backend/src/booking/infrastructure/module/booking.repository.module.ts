import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRepository } from '../repository/booking.repository';
import { BookingStatusRepository } from '../repository/booking-status.repository';
import { Booking } from '../entity/booking.entity';
import { BookingStatus } from '../entity/booking-status.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Booking, BookingStatus])],
    providers: [BookingRepository, BookingStatusRepository],
    exports: [BookingRepository, BookingStatusRepository],
})
export class BookingRepositoryModule {}
