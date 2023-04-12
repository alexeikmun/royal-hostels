import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
}
