import { ApiProperty } from '@nestjs/swagger';

export class CreateAmenityDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
}

export class UpdateAmenityDto extends CreateAmenityDto {}
