import { RoomModel } from '../../../room/domain/model/room.model';

export class BookingModel {
    id: number;
    statusId: number;
    startDate: Date;
    endDate: Date;
    guests: number;

    rooms: RoomModel[];
}
