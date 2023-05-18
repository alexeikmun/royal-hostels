import { Controller, Get, Inject, Query } from '@nestjs/common';

import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { SearchUsecaseModule } from '../module/search.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { SearchLocationsDto } from '../dto/search-locations.dto';
import { LocationsModel } from 'src/search/domain/model/locations.model';
import { FindLocationsUseCase } from 'src/search/application/find-locations.usecase';
import { FindHostelsUseCase } from 'src/search/application/find-hostels.usecase';
import { SearchHostelsDto } from '../dto/search-hostels.dto';
import { HostelsModel } from 'src/search/domain/model/hostels.model';

@Controller('search')
@ApiTags('Search')
export class SearchController {
    constructor(
        @Inject(SearchUsecaseModule.FIND_LOCATIONS_USECASES_PROXY)
        private readonly findLocationsUseCase: UseCaseProxy<FindLocationsUseCase>,
        @Inject(SearchUsecaseModule.FIND_HOSTELS_USECASES_PROXY)
        private readonly findHostelsUseCase: UseCaseProxy<FindHostelsUseCase>,
    ) {}
    @Get('locations')
    @ApiCreatedResponse({ type: SearchLocationsDto })
    async findLocations(
        @Query() query: SearchLocationsDto,
    ): Promise<LocationsModel[]> {
        return await this.findLocationsUseCase
            .getInstance()
            .execute(query.query);
    }

    @Get('hostels')
    @ApiCreatedResponse({ type: SearchHostelsDto })
    async finsHostels(
        @Query() query: SearchHostelsDto,
    ): Promise<HostelsModel[]> {
        return await this.findHostelsUseCase.getInstance().execute(query);
    }
}
