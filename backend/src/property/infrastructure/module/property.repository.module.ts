import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyRepository } from '../repository/property.repository';
import { PropertyTypeRepository } from '../repository/property-type.repository';
import { Property } from '../entity/property.entity';
import { PropertyType } from '../entity/property-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Property, PropertyType])],
    providers: [PropertyRepository, PropertyTypeRepository],
    exports: [PropertyRepository, PropertyTypeRepository],
})
export class PropertyRepositoryModule {}
