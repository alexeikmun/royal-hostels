import { RoomAmenityModel } from '../../../roomAmenity/domain/model/roomAmenity.model';

export class RoomModel {
    id: number;
    price: number;
    description: string;
    name: string;
    maxGuests: number;
    amenities: RoomAmenityModel[];
}
