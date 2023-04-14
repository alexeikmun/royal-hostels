import { Module } from '@nestjs/common';
import { PropertyType } from '../entity/property-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyTypeRepository } from '../repository/property-type.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PropertyType])],
    providers: [PropertyTypeRepository],
    exports: [PropertyTypeRepository],
})
export class PropertyTypeRepositoryModule {}
