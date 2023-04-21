import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
    @ApiProperty({
        type: String,
    })
    readonly name: string;
    @ApiProperty({
        type: Boolean,
    })
    readonly isSuper: boolean;
}

export class UpdateAdminDto extends CreateAdminDto {}
