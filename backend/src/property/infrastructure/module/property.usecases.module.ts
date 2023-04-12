import { Module } from '@nestjs/common';
import {
    CreatePropertyUseCase,
    DeletePropertyUseCase,
    FindOnePropertyUseCase,
    UpdatePropertyUseCase,
    CreateTypeUseCase,
} from '../../application/index';
import { PropertyMapperModule } from './property.mapper.module';
import { PropertyTypeMapperModule } from './property-type.mapper.module';
import { PropertyRepositoryModule } from './property.repository.module';
import { PropertyTypeRepositoryModule } from './property-type.repository.module';

@Module({
    imports: [
        PropertyRepositoryModule,
        PropertyTypeRepositoryModule,
        PropertyMapperModule,
        PropertyTypeMapperModule,
    ],
    providers: [
        CreatePropertyUseCase,
        DeletePropertyUseCase,
        FindOnePropertyUseCase,
        UpdatePropertyUseCase,
        CreateTypeUseCase,
    ],
    exports: [
        CreatePropertyUseCase,
        DeletePropertyUseCase,
        FindOnePropertyUseCase,
        UpdatePropertyUseCase,
        CreateTypeUseCase,
    ],
})
export class PropertyUseCasesModule {}
