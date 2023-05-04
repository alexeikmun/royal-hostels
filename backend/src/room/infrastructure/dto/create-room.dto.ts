import { ApiProperty } from '@nestjs/swagger';
import { Amenity } from '../../../amenity/infrastructure/entity/amenity.entity';
import { AmenityModel } from '../../../amenity/domain/model/amenity.model';

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
        type: Amenity,
        isArray: true,
    })
    readonly amenities: AmenityModel[];
}
