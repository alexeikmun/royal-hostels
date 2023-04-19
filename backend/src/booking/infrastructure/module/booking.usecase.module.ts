import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateBookingUseCase,
    CreateStatusUsecase,
    DeleteBookingUseCase,
    FindOneBookingUseCase,
    FindBookingsUseCase,
    UpdateBookingUseCase,
} from 'src/booking/application';

import { BookingRepositoryModule } from './booking.repository.module';
import { BookingRepository } from '../repository/booking.repository';
import { BookingStatusRepository } from '../repository/booking-status.repository';

import { BookingMapperModule } from './booking.mapper.module';
import { BookingMapper } from '../utils/booking.mapper';
import { BookingStatusMapper } from '../utils/booking-status.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [BookingRepositoryModule, BookingMapperModule],
})
export class BookingUsecaseModule {
    static GET_BOOKING_USECASES_PROXY = 'getBookingUsecasesProxy';
    static GET_BOOKINGS_USECASES_PROXY = 'getBookingsUsecasesProxy';
    static POST_BOOKING_USECASES_PROXY = 'postBookingUsecasesProxy';
    static DELETE_BOOKING_USECASES_PROXY = 'deleteBookingUsecasesProxy';
    static PUT_BOOKING_USECASES_PROXY = 'putBookingUsecasesProxy';
    static POST_STATUS_USECASES_PROXY = 'postStatusUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: BookingUsecaseModule,
            providers: [
                {
                    inject: [BookingRepository],
                    provide: BookingUsecaseModule.GET_BOOKING_USECASES_PROXY,
                    useFactory: (bookingRepository: BookingRepository) =>
                        new UseCaseProxy(
                            new FindOneBookingUseCase(bookingRepository),
                        ),
                },
                {
                    inject: [BookingRepository],
                    provide: BookingUsecaseModule.GET_BOOKINGS_USECASES_PROXY,
                    useFactory: (bookingRepository: BookingRepository) =>
                        new UseCaseProxy(
                            new FindBookingsUseCase(bookingRepository),
                        ),
                },
                {
                    inject: [BookingRepository, BookingMapper],
                    provide: BookingUsecaseModule.POST_BOOKING_USECASES_PROXY,
                    useFactory: (
                        bookingRepository: BookingRepository,
                        bookingMapper: BookingMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateBookingUseCase(
                                bookingRepository,
                                bookingMapper,
                            ),
                        ),
                },
                {
                    inject: [BookingRepository, BookingMapper],
                    provide: BookingUsecaseModule.PUT_BOOKING_USECASES_PROXY,
                    useFactory: (
                        bookingRepository: BookingRepository,
                        bookingMapper: BookingMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateBookingUseCase(
                                bookingRepository,
                                bookingMapper,
                            ),
                        ),
                },
                {
                    inject: [BookingRepository],
                    provide: BookingUsecaseModule.DELETE_BOOKING_USECASES_PROXY,
                    useFactory: (bookingRepository: BookingRepository) =>
                        new UseCaseProxy(
                            new DeleteBookingUseCase(bookingRepository),
                        ),
                },
                {
                    inject: [BookingStatusRepository, BookingStatusMapper],
                    provide: BookingUsecaseModule.POST_STATUS_USECASES_PROXY,
                    useFactory: (
                        bookingStatusRepository: BookingStatusRepository,
                        bookingStatusMapper: BookingStatusMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateStatusUsecase(
                                bookingStatusRepository,
                                bookingStatusMapper,
                            ),
                        ),
                },
            ],
            exports: [
                BookingUsecaseModule.GET_BOOKING_USECASES_PROXY,
                BookingUsecaseModule.GET_BOOKINGS_USECASES_PROXY,
                BookingUsecaseModule.POST_BOOKING_USECASES_PROXY,
                BookingUsecaseModule.PUT_BOOKING_USECASES_PROXY,
                BookingUsecaseModule.DELETE_BOOKING_USECASES_PROXY,
                BookingUsecaseModule.POST_STATUS_USECASES_PROXY,
            ],
        };
    }
}
