import { DynamicModule, Module } from '@nestjs/common';

import {
    CreatePropertyUseCase,
    CreateTypeUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
    FindPropertiesUseCase,
    UpdatePropertyUseCase,
} from 'src/property/application';

import { PropertyRepositoryModule } from './property.repository.module';
import { PropertyRepository } from '../repository/property.repository';
import { PropertyTypeRepository } from '../repository/property-type.repository';

import { PropertyMapperModule } from './property.mapper.module';
import { PropertyMapper } from '../utils/property.mapper';
import { PropertyTypeMapper } from '../utils/property-type.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [PropertyRepositoryModule, PropertyMapperModule],
})
export class PropertyProxyModule {
    static GET_PROPERTY_USECASES_PROXY = 'getPropertyUsecasesProxy';
    static GET_PROPERTIES_USECASES_PROXY = 'getPropertiesUsecasesProxy';
    static POST_PROPERTY_USECASES_PROXY = 'postPropertyUsecasesProxy';
    static DELETE_PROPERTY_USECASES_PROXY = 'deletePropertyUsecasesProxy';
    static PUT_PROPERTY_USECASES_PROXY = 'putPropertyUsecasesProxy';
    static POST_TYPE_USECASES_PROXY = 'postTypeUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: PropertyProxyModule,
            providers: [
                {
                    inject: [PropertyRepository],
                    provide: PropertyProxyModule.GET_PROPERTY_USECASES_PROXY,
                    useFactory: (propertyRepository: PropertyRepository) =>
                        new UseCaseProxy(
                            new FindOnePropertyUseCase(propertyRepository),
                        ),
                },
                {
                    inject: [PropertyRepository],
                    provide: PropertyProxyModule.GET_PROPERTIES_USECASES_PROXY,
                    useFactory: (propertyRepository: PropertyRepository) =>
                        new UseCaseProxy(
                            new FindPropertiesUseCase(propertyRepository),
                        ),
                },
                {
                    inject: [PropertyRepository, PropertyMapper],
                    provide: PropertyProxyModule.POST_PROPERTY_USECASES_PROXY,
                    useFactory: (
                        propertyRepository: PropertyRepository,
                        propertyMapper: PropertyMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreatePropertyUseCase(
                                propertyRepository,
                                propertyMapper,
                            ),
                        ),
                },
                {
                    inject: [PropertyRepository, PropertyMapper],
                    provide: PropertyProxyModule.PUT_PROPERTY_USECASES_PROXY,
                    useFactory: (
                        propertyRepository: PropertyRepository,
                        propertyMapper: PropertyMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdatePropertyUseCase(
                                propertyRepository,
                                propertyMapper,
                            ),
                        ),
                },
                {
                    inject: [PropertyRepository],
                    provide: PropertyProxyModule.DELETE_PROPERTY_USECASES_PROXY,
                    useFactory: (propertyRepository: PropertyRepository) =>
                        new UseCaseProxy(
                            new DeletePropertyUseCase(propertyRepository),
                        ),
                },
                {
                    inject: [PropertyTypeRepository, PropertyTypeMapper],
                    provide: PropertyProxyModule.POST_TYPE_USECASES_PROXY,
                    useFactory: (
                        propertyTypeRepository: PropertyTypeRepository,
                        propertyTypeMapper: PropertyTypeMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateTypeUseCase(
                                propertyTypeRepository,
                                propertyTypeMapper,
                            ),
                        ),
                },
            ],
            exports: [
                PropertyProxyModule.GET_PROPERTY_USECASES_PROXY,
                PropertyProxyModule.GET_PROPERTIES_USECASES_PROXY,
                PropertyProxyModule.POST_PROPERTY_USECASES_PROXY,
                PropertyProxyModule.PUT_PROPERTY_USECASES_PROXY,
                PropertyProxyModule.DELETE_PROPERTY_USECASES_PROXY,
                PropertyProxyModule.POST_TYPE_USECASES_PROXY,
            ],
        };
    }
}
