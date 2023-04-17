import { Module } from '@nestjs/common';
import { PropertyMapper } from '../utils/property.mapper';
import { PropertyTypeMapper } from '../utils/property-type.mapper';

@Module({
    providers: [PropertyMapper, PropertyTypeMapper],
    exports: [PropertyMapper, PropertyTypeMapper],
})
export class PropertyMapperModule {}
