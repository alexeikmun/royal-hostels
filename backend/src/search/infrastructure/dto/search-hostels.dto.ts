import { ApiProperty } from '@nestjs/swagger';

export class SearchHostelsDto {
    @ApiProperty({
        type: String,
    })
    readonly query: string;
}
