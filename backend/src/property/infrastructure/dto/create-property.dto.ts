import { ApiProperty } from '@nestjs/swagger';

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
}
