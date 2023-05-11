import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/auth/domain/enum/role.enum';

export class CreateUserDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
    @ApiProperty({
        type: String,
    })
    readonly address?: string;
    @ApiProperty({
        type: String,
    })
    readonly country?: string;
    @ApiProperty({
        type: String,
    })
    readonly city?: string;
    @ApiProperty({
        type: String,
    })
    readonly zipcode?: string;
    @ApiProperty({
        type: 'string',
        format: 'date',
        example: '2018-11-21',
    })
    readonly birthday?: Date;
    @ApiProperty({
        type: String,
    })
    readonly phone?: string;
    @ApiProperty({
        type: String,
    })
    readonly email: string;
    @ApiProperty({
        type: String,
    })
    readonly password: string;
    @ApiProperty({
        enum: Role,
    })
    readonly role: Role;
}

export class UpdateUserDto extends CreateUserDto {}
