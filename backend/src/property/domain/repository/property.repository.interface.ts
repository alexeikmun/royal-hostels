import { PropertyModel } from '../model/property.model';

export interface PropertyRepositoryInterface {
    create(property: PropertyModel): Promise<PropertyModel>;
    update(id: number, property: PropertyModel): Promise<PropertyModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<PropertyModel>;
}
