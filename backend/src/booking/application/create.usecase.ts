import { CreateBookingDto } from '../infrastructure/dto/booking.dto';
import { BookingModel } from '../domain/model/booking.model';
import { BookingRepository } from '../infrastructure/repository/booking.repository';
import { BookingMapper } from '../infrastructure/utils/booking.mapper';

export class CreateBookingUseCase {
    constructor(
        private readonly bookingRepository: BookingRepository,
        private readonly bookingMapper: BookingMapper,
    ) {}

    async execute(createBookingDto: CreateBookingDto): Promise<BookingModel> {
        const newBooking = await this.bookingRepository.create(
            createBookingDto,
        );
        return this.bookingMapper.toDomain(newBooking);
    }
}
