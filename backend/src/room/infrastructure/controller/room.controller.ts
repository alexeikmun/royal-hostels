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
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import {
    CreateRoomUseCase,
    UpdateRoomUseCase,
    DeleteRoomUseCase,
    FindOneRoomUseCase,
} from 'src/room/application';
import { RoomModel } from 'src/room/domain/model/room.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RoomUseCaseModule } from '../module/roomUseCaseModule';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('room')
@ApiTags('Room')
export class RoomController {
    constructor(
        @Inject(RoomUseCaseModule.DELETE_ROOM_USECASES_PROXY)
        private readonly deleteRoomUseCase: UseCaseProxy<DeleteRoomUseCase>,
        @Inject(RoomUseCaseModule.GET_ROOM_USECASES_PROXY)
        private readonly findOneRoomUseCase: UseCaseProxy<FindOneRoomUseCase>,
        @Inject(RoomUseCaseModule.POST_ROOM_USECASES_PROXY)
        private readonly createRoomUseCase: UseCaseProxy<CreateRoomUseCase>,
        @Inject(RoomUseCaseModule.PUT_ROOM_USECASES_PROXY)
        private readonly updateRoomUseCase: UseCaseProxy<UpdateRoomUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: RoomModel })
    async create(@Body() createRoomDto: CreateRoomDto): Promise<RoomModel> {
        return await this.createRoomUseCase
            .getInstance()
            .execute(createRoomDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneRoomUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateRoomDto: UpdateRoomDto,
    ) {
        return await this.updateRoomUseCase
            .getInstance()
            .execute(id, updateRoomDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteRoomUseCase.getInstance().execute(id);
    }
}
