import { Module } from '@nestjs/common';
import { AmenityMapper } from '../utils/amenity.mapper';

@Module({
    providers: [AmenityMapper],
    exports: [AmenityMapper],
})
export class AmenityMapperModule {}
