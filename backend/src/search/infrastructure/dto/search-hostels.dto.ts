import { ApiProperty } from '@nestjs/swagger';

export class SearchHostelsDto {
    @ApiProperty({
        type: String,
        required: false,
    })
    readonly query?: string;
    @ApiProperty({
        type: String,
        required: false,
    })
    readonly propType?: string;
    @ApiProperty({
        type: Number,
        required: false,
    })
    readonly priceLow?: number;
    @ApiProperty({
        type: Number,
        required: false,
    })
    readonly priceHigh?: number;
}
