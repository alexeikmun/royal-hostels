import {
    Body,
    Controller,
    Delete,
    Get,
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

@Controller('guest')
@ApiTags('Guest')
export class GuestController {
    constructor(
        private readonly createGuestUseCase: CreateGuestUseCase,
        private readonly updateGuestUseCase: UpdateGuestUseCase,
        private readonly deleteGuestUseCase: DeleteGuestUseCase,
        private readonly findOneGuestUseCase: FindOneGuestUseCase,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: GuestModel })
    async create(@Body() createGuestDto: CreateGuestDto): Promise<GuestModel> {
        return await this.createGuestUseCase.execute(createGuestDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneGuestUseCase.execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateGuestDto: UpdateGuestDto,
    ) {
        return await this.updateGuestUseCase.execute(id, updateGuestDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteGuestUseCase.execute(id);
    }
}
