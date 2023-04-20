import { CreateBookingStatusDto } from 'src/booking/infrastructure/dto/booking-status.dto';
import { BookingStatusModel } from 'src/booking/domain/model/booking-status.model';
import { BookingStatus } from '../entity/booking-status.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingStatusMapper {
    toEntity(status: CreateBookingStatusDto): BookingStatus {
        const bookingStatusEntity = new BookingStatus();
        bookingStatusEntity.name = status.name;
        return bookingStatusEntity;
    }

    toEntityWithContext(
        bookingStatusEntity: BookingStatus,
        bookingStatusDto: CreateBookingStatusDto,
    ): BookingStatus {
        bookingStatusEntity.name = bookingStatusDto.name;
        return bookingStatusEntity;
    }

    toDomain(status: BookingStatus): BookingStatusModel {
        const bookingStatusDomain = new BookingStatusModel();
        bookingStatusDomain.id = status.id;
        bookingStatusDomain.name = status.name;
        return bookingStatusDomain;
    }
}
