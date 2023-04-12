import { Module } from '@nestjs/common';
import { PropertyTypeMapper } from '../utils/type.mapper';

@Module({
    providers: [PropertyTypeMapper],
    exports: [PropertyTypeMapper],
})
export class PropertyTypeMapperModule {}
