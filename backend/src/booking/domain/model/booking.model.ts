import { RoomModel } from '../../../room/domain/model/room.model';
import { Room } from '../../../room/infrastructure/entity/room.entity';

export class BookingModel {
    id: number;
    statusId: number;
    startDate: Date;
    endDate: Date;
    guests: number;

    rooms: Room[];
}
