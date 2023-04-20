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
import { CreateAmenityDto, UpdateAmenityDto } from '../dto/amenity.dto';
import {
    CreateAmenityUseCase,
    UpdateAmenityUseCase,
    DeleteAmenityUseCase,
    FindOneAmenityUseCase,
    FindAmenitiesUseCase,
} from 'src/amenity/application';
import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { AmenityUsecaseModule } from '../module/amenity.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('amenity')
@ApiTags('Amenity')
export class AmenityController {
    constructor(
        @Inject(AmenityUsecaseModule.DELETE_AMENITY_USECASES_PROXY)
        private readonly deleteAmenityUseCase: UseCaseProxy<DeleteAmenityUseCase>,
        @Inject(AmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY)
        private readonly findAmenitiesUseCase: UseCaseProxy<FindAmenitiesUseCase>,
        @Inject(AmenityUsecaseModule.GET_AMENITY_USECASES_PROXY)
        private readonly findOneAmenityUseCase: UseCaseProxy<FindOneAmenityUseCase>,
        @Inject(AmenityUsecaseModule.POST_AMENITY_USECASES_PROXY)
        private readonly createAmenityUseCase: UseCaseProxy<CreateAmenityUseCase>,
        @Inject(AmenityUsecaseModule.PUT_AMENITY_USECASES_PROXY)
        private readonly updateAmenityUseCase: UseCaseProxy<UpdateAmenityUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: AmenityModel })
    async create(
        @Body() createAmenityDto: CreateAmenityDto,
    ): Promise<AmenityModel> {
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
        @Body() updateAmenityDto: UpdateAmenityDto,
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
