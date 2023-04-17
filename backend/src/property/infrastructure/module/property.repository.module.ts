import { Module } from '@nestjs/common';
import { Property } from '../entity/property.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyRepository } from '../repository/property.repository';
import { PropertyType } from '../entity/property-type.entity';
import { PropertyTypeRepository } from '../repository/property-type.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Property, PropertyType])],
    providers: [PropertyRepository, PropertyTypeRepository],
    exports: [PropertyRepository, PropertyTypeRepository],
})
export class PropertyRepositoryModule {}
