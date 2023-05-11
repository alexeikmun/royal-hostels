import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/infrastructure/dto/user.dto';

export class CreateAdminDto extends CreateUserDto {
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
