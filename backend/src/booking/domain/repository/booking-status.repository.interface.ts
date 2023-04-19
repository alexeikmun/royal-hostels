import { BookingStatusModel } from '../model/booking-status.model';

export interface BookingStatusRepositoryInterface {
    createBookingStatus(
        bookingStatus: BookingStatusModel,
    ): Promise<BookingStatusModel>;
}
