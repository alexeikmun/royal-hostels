import { LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { Property } from '../infrastructure/entity/property.entity';
import { PropertyRepository } from '../infrastructure/repository/property.repository';

export interface PayloadInterface {
    place: string;
    dates: { start: Date; end: Date };
    adults: number;
}

export class SearchProperties {
    constructor(private readonly propertyRepository: PropertyRepository) {}
    async execute(payload: PayloadInterface): Promise<Property[]> {
        const whereQuery = {
            where: {
                place: payload.place,
                startDate: MoreThanOrEqual(payload.dates.start),
                endDate: LessThanOrEqual(payload.dates.end),
                adults: payload.adults,
            },
        };
        return await this.propertyRepository.findWithFilter(whereQuery);
    }
}
