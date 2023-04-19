import { ApiProperty } from '@nestjs/swagger';
import { Room } from '../../../room/infrastructure/entity/room.entity';

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
    readonly rooms: Room[];
}

export class UpdateBookingDto extends CreateBookingDto {}
