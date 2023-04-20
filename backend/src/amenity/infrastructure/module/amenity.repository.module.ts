import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmenityRepository } from '../repository/amenity.repository';
import { Amenity } from '../entity/amenity.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Amenity])],
    providers: [AmenityRepository],
    exports: [AmenityRepository],
})
export class AmenityRepositoryModule {}
