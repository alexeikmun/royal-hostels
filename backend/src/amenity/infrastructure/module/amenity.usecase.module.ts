import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateAmenityUseCase,
    DeleteAmenityUseCase,
    FindOneAmenityUseCase,
    FindAmenitiesUseCase,
    UpdateAmenityUseCase,
} from 'src/amenity/application';

import { AmenityRepositoryModule } from './amenity.repository.module';
import { AmenityRepository } from '../repository/amenity.repository';

import { AmenityMapperModule } from './amenity.mapper.module';
import { AmenityMapper } from '../utils/amenity.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [AmenityRepositoryModule, AmenityMapperModule],
})
export class AmenityUsecaseModule {
    static GET_AMENITY_USECASES_PROXY = 'getAmenityUsecasesProxy';
    static GET_AMENITIES_USECASES_PROXY = 'getAmenitiesUsecasesProxy';
    static POST_AMENITY_USECASES_PROXY = 'postAmenityUsecasesProxy';
    static DELETE_AMENITY_USECASES_PROXY = 'deleteAmenityUsecasesProxy';
    static PUT_AMENITY_USECASES_PROXY = 'putAmenityUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: AmenityUsecaseModule,
            providers: [
                {
                    inject: [AmenityRepository],
                    provide: AmenityUsecaseModule.GET_AMENITY_USECASES_PROXY,
                    useFactory: (repository: AmenityRepository) =>
                        new UseCaseProxy(new FindOneAmenityUseCase(repository)),
                },
                {
                    inject: [AmenityRepository],
                    provide: AmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY,
                    useFactory: (repository: AmenityRepository) =>
                        new UseCaseProxy(new FindAmenitiesUseCase(repository)),
                },
                {
                    inject: [AmenityRepository, AmenityMapper],
                    provide: AmenityUsecaseModule.POST_AMENITY_USECASES_PROXY,
                    useFactory: (
                        repository: AmenityRepository,
                        amenityMapper: AmenityMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateAmenityUseCase(repository, amenityMapper),
                        ),
                },
                {
                    inject: [AmenityRepository, AmenityMapper],
                    provide: AmenityUsecaseModule.PUT_AMENITY_USECASES_PROXY,
                    useFactory: (
                        repository: AmenityRepository,
                        amenityMapper: AmenityMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateAmenityUseCase(repository, amenityMapper),
                        ),
                },
                {
                    inject: [AmenityRepository],
                    provide: AmenityUsecaseModule.DELETE_AMENITY_USECASES_PROXY,
                    useFactory: (repository: AmenityRepository) =>
                        new UseCaseProxy(new DeleteAmenityUseCase(repository)),
                },
            ],
            exports: [
                AmenityUsecaseModule.GET_AMENITY_USECASES_PROXY,
                AmenityUsecaseModule.GET_AMENITIES_USECASES_PROXY,
                AmenityUsecaseModule.POST_AMENITY_USECASES_PROXY,
                AmenityUsecaseModule.PUT_AMENITY_USECASES_PROXY,
                AmenityUsecaseModule.DELETE_AMENITY_USECASES_PROXY,
            ],
        };
    }
}
