import { RoomModel } from '../../../room/domain/model/room.model';
import { CommentModel } from '../../../comment/domain/model/comment.model';

export class BookingModel {
    id: number;
    statusId: number;
    startDate: Date;
    endDate: Date;
    guests: number;

    rooms: RoomModel[];

    comment: CommentModel;
}
