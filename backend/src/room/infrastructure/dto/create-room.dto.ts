import { ApiProperty } from '@nestjs/swagger';

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
}
