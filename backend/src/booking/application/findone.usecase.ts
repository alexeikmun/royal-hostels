import { Booking } from '../infrastructure/entity/booking.entity';
import { BookingRepository } from '../infrastructure/repository/booking.repository';

export class FindOneBookingUseCase {
    constructor(private readonly bookingRepository: BookingRepository) {}

    async execute(id: number): Promise<Booking> {
        return await this.bookingRepository.findOne(id);
    }
}
