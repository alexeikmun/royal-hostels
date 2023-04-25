import { AmenityModel } from '../../../amenity/domain/model/amenity.model';

export class RoomModel {
    id: number;
    price: number;
    description: string;
    name: string;
    maxGuests: number;
    amenities: AmenityModel[];
}
