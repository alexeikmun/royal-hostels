import { Comment } from '../infraestructure/entity/comment.entity';
import { CommentRepository } from '../infraestructure/repository/comment.repository';

export class FindOneCommentUseCase {
    constructor(private readonly repository: CommentRepository) {}

    async execute(id: number): Promise<Comment> {
        return await this.repository.findOne(id);
    }
}
