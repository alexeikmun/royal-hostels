import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IsAuthDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly email: string;
}
