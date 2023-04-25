import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomAmenityDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
}

export class UpdateRoomAmenityDto extends CreateRoomAmenityDto {}
