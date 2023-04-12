import { Module } from '@nestjs/common';
import { Property } from '../entity/property.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyRepository } from '../repository/property.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Property])],
    providers: [PropertyRepository],
    exports: [PropertyRepository],
})
export class PropertyRepositoryModule {}
