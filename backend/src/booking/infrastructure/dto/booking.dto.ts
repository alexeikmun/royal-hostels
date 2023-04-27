import { ApiProperty } from '@nestjs/swagger';
import { Room } from '../../../room/infrastructure/entity/room.entity';
import { RoomModel } from '../../../room/domain/model/room.model';
import { Comment } from '../../../comment/infraestructure/entity/comment.entity';
import { CommentModel } from '../../../comment/domain/model/comment.model';

export class CreateBookingDto {
    @ApiProperty({
        type: Number,
    })
    readonly statusId: number;

    @ApiProperty({
        type: Number,
    })
    readonly guests: number;

    @ApiProperty({
        type: Date,
    })
    readonly startDate: Date;

    @ApiProperty({
        type: Date,
    })
    readonly endDate: Date;

    @ApiProperty({
        type: Room,
        isArray: true,
    })
    readonly rooms: RoomModel[];

    @ApiProperty({
        type: Comment,
    })
    readonly comment: CommentModel;
}

export class UpdateBookingDto extends CreateBookingDto {}
