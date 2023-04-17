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
import { CreateGuestDto } from '../dto/create-guest.dto';
import { UpdateGuestDto } from '../dto/update-guest.dto';
import {
    CreateGuestUseCase,
    UpdateGuestUseCase,
    DeleteGuestUseCase,
    FindOneGuestUseCase,
} from 'src/guest/application';
import { GuestModel } from 'src/guest/domain/model/guest.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { GuestUsecaseModule } from '../module/guest.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('guest')
@ApiTags('Guest')
export class GuestController {
    constructor(
        @Inject(GuestUsecaseModule.DELETE_GUEST_USECASES_PROXY)
        private readonly deleteGuestUseCase: UseCaseProxy<DeleteGuestUseCase>,
        @Inject(GuestUsecaseModule.GET_GUEST_USECASES_PROXY)
        private readonly findOneGuestUseCase: UseCaseProxy<FindOneGuestUseCase>,
        @Inject(GuestUsecaseModule.POST_GUEST_USECASES_PROXY)
        private readonly createGuestUseCase: UseCaseProxy<CreateGuestUseCase>,
        @Inject(GuestUsecaseModule.PUT_GUEST_USECASES_PROXY)
        private readonly updateGuestUseCase: UseCaseProxy<UpdateGuestUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: GuestModel })
    async create(@Body() createGuestDto: CreateGuestDto): Promise<GuestModel> {
        return await this.createGuestUseCase
            .getInstance()
            .execute(createGuestDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneGuestUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateGuestDto: UpdateGuestDto,
    ) {
        return await this.updateGuestUseCase
            .getInstance()
            .execute(id, updateGuestDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteGuestUseCase.getInstance().execute(id);
    }
}
