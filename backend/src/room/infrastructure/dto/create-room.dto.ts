import { ApiProperty } from '@nestjs/swagger';
import { RoomAmenity } from '../../../roomAmenity/infrastructure/entity/roomAmenity.entity';
import { RoomAmenityModel } from '../../../roomAmenity/domain/model/roomAmenity.model';

export class CreateRoomDto {
    @ApiProperty({
        type: Number,
    })
    readonly price: number;

    @ApiProperty({
        type: String,
    })
    readonly description: string;

    @ApiProperty({
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        type: Number,
    })
    readonly maxGuests: number;

    @ApiProperty({
        type: RoomAmenity,
        isArray: true,
    })
    readonly amenities: RoomAmenityModel[];
}
