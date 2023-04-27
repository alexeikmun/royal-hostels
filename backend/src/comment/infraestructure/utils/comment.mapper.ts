import { CommentModel } from 'src/comment/domain/model/comment.model';
import { Comment } from '../entity/comment.entity';
import { Injectable } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentMapper {
    toEntity(entityDto: CreateCommentDto | UpdateCommentDto): Comment {
        const entity = new Comment();
        entity.title = entityDto.title;
        entity.comment = entityDto.comment;
        entity.overallRating = entityDto.overallRating;
        return entity;
    }

    toEntityWithContext(
        entity: Comment,
        entityDto: CreateCommentDto | UpdateCommentDto,
    ): Comment {
        entity.title = entityDto.title;
        entity.comment = entityDto.comment;
        entity.overallRating = entityDto.overallRating;
        return entity;
    }

    toDomain(entity: Comment): CommentModel {
        const domain = new CommentModel();
        domain.id = entity.id;
        domain.title = entity.title;
        domain.comment = entity.comment;
        domain.overallRating = entity.overallRating;
        return domain;
    }
}
