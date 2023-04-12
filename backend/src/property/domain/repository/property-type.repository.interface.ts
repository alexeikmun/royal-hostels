import { PropertyTypeModel } from '../model/property-type.model';

export interface PropertyTypeRepositoryInterface {
    createType(type: PropertyTypeModel): Promise<PropertyTypeModel>;
}
