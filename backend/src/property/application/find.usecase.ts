import { Injectable } from '@nestjs/common';
import { Property } from '../infrastructure/entity/property.entity';
import { PropertyRepository } from '../infrastructure/repository/property.repository';

@Injectable()
export class FindPropertyUseCase {
    constructor(private readonly propertyRepository: PropertyRepository) {}

    async execute(): Promise<Property[]> {
        return await this.propertyRepository.find();
    }
}
