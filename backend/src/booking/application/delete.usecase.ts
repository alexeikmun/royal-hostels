import { BookingRepository } from '../infrastructure/repository/booking.repository';

export class DeleteBookingUseCase {
    constructor(private readonly bookingRepository: BookingRepository) {}

    async execute(id: number): Promise<void> {
        await this.bookingRepository.delete(id);
    }
}
