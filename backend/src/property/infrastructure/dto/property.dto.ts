import { ApiProperty } from '@nestjs/swagger';
import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import { Amenity } from 'src/amenity/infrastructure/entity/amenity.entity';
import { RoomModel } from 'src/room/domain/model/room.model';
import { Room } from 'src/room/infrastructure/entity/room.entity';
export class CreatePropertyDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
    @ApiProperty({
        type: String,
    })
    readonly email: string;
    @ApiProperty({
        type: String,
    })
    readonly phone: string;
    @ApiProperty({
        type: String,
    })
    readonly city: string;
    @ApiProperty({
        type: String,
    })
    readonly address: string;
    @ApiProperty({
        type: String,
    })
    readonly country: string;
    @ApiProperty({
        type: String,
    })
    readonly zipcode: string;
    @ApiProperty({
        type: Number,
    })
    readonly typeId: number;

    @ApiProperty({
        type: String,
    })
    image: string;
    @ApiProperty({
        type: String,
    })
    description: string;

    @ApiProperty({
        type: Number,
        default: 3,
    })
    rate: number;

    @ApiProperty({
        type: Amenity,
        isArray: true,
    })
    readonly amenities: AmenityModel[];

    @ApiProperty({
        type: Room,
        isArray: true,
    })
    readonly rooms: RoomModel[];

    @ApiProperty({
        type: Number,
    })
    price: number;

    @ApiProperty({
        type: Number,
    })
    availableRooms: number;
}

export class UpdatePropertyDto extends CreatePropertyDto {}
