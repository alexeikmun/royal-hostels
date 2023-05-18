import { Controller, Get, Inject, Query } from '@nestjs/common';

import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { SearchUsecaseModule } from '../module/search.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { SearchLocationsDto } from '../dto/search-locations.dto';
import { LocationsModel } from 'src/search/domain/model/locations.model';
import { FindLocationsUseCase } from 'src/search/application/find-locations.usecase';

@Controller('search')
@ApiTags('Search')
export class SearchController {
    constructor(
        @Inject(SearchUsecaseModule.FIND_HOSTELS_USECASES_PROXY)
        private readonly findLocationsUseCase: UseCaseProxy<FindLocationsUseCase>,
    ) {}
    @Get('locations')
    @ApiCreatedResponse({ type: SearchLocationsDto })
    async create(
        @Query() query: SearchLocationsDto,
    ): Promise<LocationsModel[]> {
        return await this.findLocationsUseCase
            .getInstance()
            .execute(query.query);
    }
}
