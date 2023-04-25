import { RoomAmenityModel } from '../model/roomAmenity.model';

export interface RoomAmenityRepositoryInterface {
    create(roomAmenity: RoomAmenityModel): Promise<RoomAmenityModel>;
    update(
        id: number,
        roomAmenity: RoomAmenityModel,
    ): Promise<RoomAmenityModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<RoomAmenityModel>;
    find(): Promise<RoomAmenityModel[]>;
}
