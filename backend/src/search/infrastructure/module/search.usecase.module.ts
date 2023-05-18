import { DynamicModule, Module } from '@nestjs/common';

import { FindLocationsUseCase } from 'src/search/application';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';
import { PropertyRepository } from 'src/property/infrastructure/repository/property.repository';
import { SearchMapperModule } from './search.mapper.module';
import { PropertyRepositoryModule } from 'src/property/infrastructure/module/property.repository.module';

@Module({
    imports: [PropertyRepositoryModule, SearchMapperModule],
})
export class SearchUsecaseModule {
    static FIND_LOCATIONS_USECASES_PROXY = 'getLocationsUsecasesProxy';
    static FIND_HOSTELS_USECASES_PROXY = 'getHostelsUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: SearchUsecaseModule,
            providers: [
                {
                    inject: [PropertyRepository],
                    provide: SearchUsecaseModule.FIND_HOSTELS_USECASES_PROXY,
                    useFactory: (repository: PropertyRepository) =>
                        new UseCaseProxy(new FindLocationsUseCase(repository)),
                },
                {
                    inject: [PropertyRepository],
                    provide: SearchUsecaseModule.FIND_LOCATIONS_USECASES_PROXY,
                    useFactory: (repository: PropertyRepository) =>
                        new UseCaseProxy(new FindLocationsUseCase(repository)),
                },
            ],
            exports: [
                SearchUsecaseModule.FIND_LOCATIONS_USECASES_PROXY,
                SearchUsecaseModule.FIND_HOSTELS_USECASES_PROXY,
            ],
        };
    }
}
