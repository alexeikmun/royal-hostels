import { Module } from '@nestjs/common';
import { PropertyTypeMapper } from '../utils/property-type.mapper';

@Module({
    providers: [PropertyTypeMapper],
    exports: [PropertyTypeMapper],
})
export class PropertyTypeMapperModule {}
