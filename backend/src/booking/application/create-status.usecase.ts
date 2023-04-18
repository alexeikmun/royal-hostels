import { CreateBookingStatusDto } from '../infrastructure/dto/booking-status.dto';
import { BookingStatusModel } from '../domain/model/booking-status.model';
import { BookingStatusRepository } from '../infrastructure/repository/booking-status.repository';
import { BookingStatusMapper } from '../infrastructure/utils/booking-status.mapper';
export class CreateStatusUsecase {
    constructor(
        private readonly bookingStatusRepository: BookingStatusRepository,
        private readonly bookingStatusMapper: BookingStatusMapper,
    ) {}

    async execute(
        createBookingStatusDto: CreateBookingStatusDto,
    ): Promise<BookingStatusModel> {
        const bookingStatus =
            await this.bookingStatusRepository.createBookingStatus(
                createBookingStatusDto,
            );
        return this.bookingStatusMapper.toDomain(bookingStatus);
    }
}
