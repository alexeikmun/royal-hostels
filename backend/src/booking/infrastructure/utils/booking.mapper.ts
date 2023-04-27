import {
    CreateBookingDto,
    UpdateBookingDto,
} from 'src/booking/infrastructure/dto/booking.dto';
import { BookingModel } from 'src/booking/domain/model/booking.model';
import { Booking } from '../entity/booking.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingMapper {
    toEntity(booking: CreateBookingDto | UpdateBookingDto): Booking {
        const bookingEntity = new Booking();
        bookingEntity.startDate = booking.startDate;
        bookingEntity.endDate = booking.endDate;
        bookingEntity.guests = booking.guests;
        bookingEntity.statusId = booking.statusId;
        bookingEntity.rooms = booking.rooms;
        bookingEntity.comment = booking.comment;
        return bookingEntity;
    }

    toEntityWithContext(
        bookingEntity: Booking,
        bookingDto: CreateBookingDto | UpdateBookingDto,
    ): Booking {
        bookingEntity.startDate = bookingDto.startDate;
        bookingEntity.endDate = bookingDto.endDate;
        bookingEntity.guests = bookingDto.guests;
        bookingEntity.statusId = bookingDto.statusId;
        bookingEntity.rooms = bookingDto.rooms;
        bookingEntity.comment = bookingDto.comment;
        return bookingEntity;
    }

    toDomain(booking: Booking): BookingModel {
        const bookingDomain = new BookingModel();
        bookingDomain.id = booking.id;
        bookingDomain.startDate = booking.startDate;
        bookingDomain.endDate = booking.endDate;
        bookingDomain.guests = booking.guests;
        bookingDomain.statusId = booking.statusId;
        bookingDomain.rooms = booking.rooms;
        bookingDomain.comment = booking.comment;
        return bookingDomain;
    }
}
