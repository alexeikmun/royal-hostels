import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { Comment } from '../entity/comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    providers: [CommentRepository],
    exports: [CommentRepository],
})
export class CommentRepositoryModule {}
