import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import { RoomModel } from 'src/room/domain/model/room.model';
export class PropertyModel {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    country: string;
    zipcode: string;
    typeId: number;
    image: string;
    description: string;
    rate: number;
    createdAt: Date;
    updatedAt: Date;
    amenities: AmenityModel[];
    rooms: RoomModel[];
    availableRooms: number;
    price: number;
}
