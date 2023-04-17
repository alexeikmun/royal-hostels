import { DynamicModule, Module } from '@nestjs/common';

import {
    CreatePropertyUseCase,
    CreateTypeUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
    FindPropertiesUseCase,
    UpdatePropertyUseCase,
} from 'src/property/application';

import { PropertyRepositoryModule } from '../module/property.repository.module';

import { PropertyRepository } from '../repository/property.repository';
import { PropertyTypeRepository } from '../repository/property-type.repository';

import { PropertyMapper } from '../utils/property.mapper';
import { PropertyTypeMapper } from '../utils/property-type.mapper';
import { PropertyMapperModule } from '../module/property.mapper.module';

import { UseCaseProxy } from './usecases-proxy';

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
                        propertyMapper: PropertyMapper,
                        propertyRepository: PropertyRepository,
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
                        propertyMapper: PropertyMapper,
                        propertyRepository: PropertyRepository,
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
                        propertyTypeMapper: PropertyTypeMapper,
                        propertyTypeRepository: PropertyTypeRepository,
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
