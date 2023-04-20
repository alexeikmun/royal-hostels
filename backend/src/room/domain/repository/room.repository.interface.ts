import { RoomModel } from '../model/room.model';

export interface RoomRepositoryInterface {
    create(room: RoomModel): Promise<RoomModel>;
    update(id: number, room: RoomModel): Promise<RoomModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<RoomModel>;
}
