import { ApiProperty } from '@nestjs/swagger';

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
}

export class UpdateBookingDto extends CreateBookingDto {}
