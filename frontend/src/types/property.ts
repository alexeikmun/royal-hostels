import type AmenityModel from './amenity';
import type RoomModel from './room';

export default interface PropertyModel {
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
