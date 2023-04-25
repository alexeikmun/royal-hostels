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
import {
    CreateRoomAmenityDto,
    UpdateRoomAmenityDto,
} from '../dto/roomAmenity.dto';
import {
    CreateRoomAmenityUseCase,
    UpdateRoomAmenityUseCase,
    DeleteRoomAmenityUseCase,
    FindOneRoomAmenityUseCase,
    FindRoomAmenitiesUseCase,
} from 'src/roomAmenity/application';
import { RoomAmenityModel } from 'src/roomAmenity/domain/model/roomAmenity.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { RoomAmenityUsecaseModule } from '../module/roomAmenity.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('roomAmenity')
@ApiTags('RoomAmenity')
export class RoomAmenityController {
    constructor(
        @Inject(RoomAmenityUsecaseModule.DELETE_ROOM_AMENITY_USECASES_PROXY)
        private readonly deleteAmenityUseCase: UseCaseProxy<DeleteRoomAmenityUseCase>,
        @Inject(RoomAmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY)
        private readonly findAmenitiesUseCase: UseCaseProxy<FindRoomAmenitiesUseCase>,
        @Inject(RoomAmenityUsecaseModule.GET_ROOM_AMENITY_USECASES_PROXY)
        private readonly findOneAmenityUseCase: UseCaseProxy<FindOneRoomAmenityUseCase>,
        @Inject(RoomAmenityUsecaseModule.POST_ROOM_AMENITY_USECASES_PROXY)
        private readonly createAmenityUseCase: UseCaseProxy<CreateRoomAmenityUseCase>,
        @Inject(RoomAmenityUsecaseModule.PUT_ROOM_AMENITY_USECASES_PROXY)
        private readonly updateAmenityUseCase: UseCaseProxy<UpdateRoomAmenityUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: RoomAmenityModel })
    async create(
        @Body() createAmenityDto: CreateRoomAmenityDto,
    ): Promise<RoomAmenityModel> {
        return await this.createAmenityUseCase
            .getInstance()
            .execute(createAmenityDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneAmenityUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateAmenityDto: UpdateRoomAmenityDto,
    ) {
        return await this.updateAmenityUseCase
            .getInstance()
            .execute(id, updateAmenityDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteAmenityUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findAmenitiesUseCase.getInstance().execute();
    }
}
