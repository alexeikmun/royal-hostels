import { ApiProperty } from '@nestjs/swagger';

export class SearchLocationsDto {
    @ApiProperty({
        type: String,
        required: false,
    })
    readonly query?: string;
}
