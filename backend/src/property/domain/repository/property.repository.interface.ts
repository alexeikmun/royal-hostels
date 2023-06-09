import {
    CreatePropertyDto,
    UpdatePropertyDto,
} from 'src/property/infrastructure/dto/property.dto';
import { PropertyModel } from '../model/property.model';

export interface PropertyRepositoryInterface {
    create(property: CreatePropertyDto): Promise<PropertyModel>;
    update(id: number, property: UpdatePropertyDto): Promise<PropertyModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<PropertyModel>;
    find(): Promise<PropertyModel[]>;
}
