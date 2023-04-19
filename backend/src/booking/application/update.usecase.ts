import { UpdateBookingDto } from '../infrastructure/dto/booking.dto';
import { BookingModel } from '../domain/model/booking.model';
import { BookingRepository } from '../infrastructure/repository/booking.repository';
import { BookingMapper } from '../infrastructure/utils/booking.mapper';

export class UpdateBookingUseCase {
    constructor(
        private readonly bookingRepository: BookingRepository,
        private readonly bookingMapper: BookingMapper,
    ) {}

    async execute(
        id: number,
        booking: UpdateBookingDto,
    ): Promise<BookingModel> {
        const bookingEntity = this.bookingMapper.toEntity(booking);
        const updatedBooking = await this.bookingRepository.update(
            id,
            bookingEntity,
        );
        return this.bookingMapper.toDomain(updatedBooking);
    }
}
