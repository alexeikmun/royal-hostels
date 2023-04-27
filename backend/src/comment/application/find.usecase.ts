import { Comment } from '../infraestructure/entity/comment.entity';
import { CommentRepository } from '../infraestructure/repository/comment.repository';

export class FindCommentsUseCase {
    constructor(private readonly repository: CommentRepository) {}

    async execute(): Promise<Comment[]> {
        return await this.repository.find();
    }
}
