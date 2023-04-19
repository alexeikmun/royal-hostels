import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateBookingDto, UpdateBookingDto } from '../dto/booking.dto';
import {
    CreateBookingUseCase,
    UpdateBookingUseCase,
    DeleteBookingUseCase,
    FindOneBookingUseCase,
    FindBookingsUseCase,
} from 'src/booking/application';
import { BookingModel } from 'src/booking/domain/model/booking.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { BookingUsecaseModule } from '../module/booking.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('booking')
@ApiTags('Booking')
export class BookingController {
    constructor(
        @Inject(BookingUsecaseModule.DELETE_BOOKING_USECASES_PROXY)
        private readonly deleteBookingUseCase: UseCaseProxy<DeleteBookingUseCase>,
        @Inject(BookingUsecaseModule.GET_BOOKINGS_USECASES_PROXY)
        private readonly findBookingsUseCase: UseCaseProxy<FindBookingsUseCase>,
        @Inject(BookingUsecaseModule.GET_BOOKING_USECASES_PROXY)
        private readonly findOneBookingUseCase: UseCaseProxy<FindOneBookingUseCase>,
        @Inject(BookingUsecaseModule.POST_BOOKING_USECASES_PROXY)
        private readonly createBookingUseCase: UseCaseProxy<CreateBookingUseCase>,
        @Inject(BookingUsecaseModule.PUT_BOOKING_USECASES_PROXY)
        private readonly updateBookingUseCase: UseCaseProxy<UpdateBookingUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: BookingModel })
    async create(
        @Body() createBookingDto: CreateBookingDto,
    ): Promise<BookingModel> {
        return await this.createBookingUseCase
            .getInstance()
            .execute(createBookingDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneBookingUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateBookingDto: UpdateBookingDto,
    ) {
        return await this.updateBookingUseCase
            .getInstance()
            .execute(id, updateBookingDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteBookingUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findBookingsUseCase.getInstance().execute();
    }
}
