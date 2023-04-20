import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingStatusDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
}
