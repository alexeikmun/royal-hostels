import { Module } from '@nestjs/common';
import { CommentMapper } from '../utils/comment.mapper';

@Module({
    providers: [CommentMapper],
    exports: [CommentMapper],
})
export class CommentMapperModule {}
