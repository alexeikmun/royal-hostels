import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyTypeDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
}
