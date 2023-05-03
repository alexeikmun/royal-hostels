import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        type: String,
    })
    readonly first_name: string;
    @ApiProperty({
        type: String,
    })
    readonly last_name: string;
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
    readonly city: string;
    @ApiProperty({
        type: String,
    })
    readonly zipcode: string;
    @ApiProperty({
        type: 'string',
        format: 'date',
        example: '2018-11-21',
    })
    readonly birthday: Date;
    @ApiProperty({
        type: String,
    })
    readonly contact_number: string;
    @ApiProperty({
        type: String,
    })
    readonly email: string;
}

export class UpdateUserDto extends CreateUserDto {}
