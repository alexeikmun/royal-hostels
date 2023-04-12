import { Module } from '@nestjs/common';
import { PropertyMapper } from '../utils/property.mapper';

@Module({
    providers: [PropertyMapper],
    exports: [PropertyMapper],
})
export class PropertyMapperModule {}
