import { Booking } from '../infrastructure/entity/booking.entity';
import { BookingRepository } from '../infrastructure/repository/booking.repository';

export class FindBookingsUseCase {
    constructor(private readonly bookingRepository: BookingRepository) {}

    async execute(): Promise<Booking[]> {
        return await this.bookingRepository.find();
    }
}
