import { AmenityModel } from '../model/amenity.model';

export interface AmenityRepositoryInterface {
    create(amenity: AmenityModel): Promise<AmenityModel>;
    update(id: number, amenity: AmenityModel): Promise<AmenityModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<AmenityModel>;
    find(): Promise<AmenityModel[]>;
}
