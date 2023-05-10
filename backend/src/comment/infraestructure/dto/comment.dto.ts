import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({
        type: String,
    })
    readonly title: string;

    @ApiProperty({
        type: String,
    })
    readonly comment: string;

    @ApiProperty({
        type: Number,
    })
    readonly overallRating: number;
}

export class UpdateCommentDto extends CreateCommentDto {}
