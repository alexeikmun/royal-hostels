import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateBookingStatusDto } from '../dto/booking-status.dto';
import { CreateStatusUsecase } from 'src/booking/application';
import { BookingStatusModel } from 'src/booking/domain/model/booking-status.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { BookingUsecaseModule } from '../module/booking.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('booking-status')
@ApiTags('BookingStatus')
export class BookingStatusController {
    constructor(
        @Inject(BookingUsecaseModule.POST_STATUS_USECASES_PROXY)
        private readonly createBookingStatusUseCase: UseCaseProxy<CreateStatusUsecase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: BookingStatusModel })
    async create(
        @Body() createBookingStatusDto: CreateBookingStatusDto,
    ): Promise<BookingStatusModel> {
        return await this.createBookingStatusUseCase
            .getInstance()
            .execute(createBookingStatusDto);
    }
}
