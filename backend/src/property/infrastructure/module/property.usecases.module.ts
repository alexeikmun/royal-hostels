import { Module } from '@nestjs/common';
import {
    CreatePropertyUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
    UpdatePropertyUseCase,
    CreateTypeUseCase,
    FindPropertiesUseCase,
} from '../../application/index';
import { PropertyMapperModule } from './property.mapper.module';
import { PropertyRepositoryModule } from './property.repository.module';

@Module({
    imports: [PropertyRepositoryModule, PropertyMapperModule],
    providers: [
        CreatePropertyUseCase,
        DeletePropertyUseCase,
        FindOnePropertyUseCase,
        UpdatePropertyUseCase,
        CreateTypeUseCase,
        FindPropertiesUseCase,
    ],
    exports: [
        CreatePropertyUseCase,
        DeletePropertyUseCase,
        FindOnePropertyUseCase,
        UpdatePropertyUseCase,
        CreateTypeUseCase,
        FindPropertiesUseCase,
    ],
})
export class PropertyUseCasesModule {}
