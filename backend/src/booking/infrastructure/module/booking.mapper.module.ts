import { Module } from '@nestjs/common';
import { BookingMapper } from '../utils/booking.mapper';
import { BookingStatusMapper } from '../utils/booking-status.mapper';

@Module({
    providers: [BookingMapper, BookingStatusMapper],
    exports: [BookingMapper, BookingStatusMapper],
})
export class BookingMapperModule {}
