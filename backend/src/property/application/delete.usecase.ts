import { Injectable } from '@nestjs/common';
import { PropertyRepository } from '../infrastructure/repository/property.repository';

@Injectable()
export class DeletePropertyUseCase {
    constructor(private readonly propertyRepository: PropertyRepository) {}

    async execute(id: number): Promise<void> {
        await this.propertyRepository.delete(id);
    }
}
