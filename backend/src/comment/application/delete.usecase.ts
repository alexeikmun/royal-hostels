import { CommentRepository } from '../infraestructure/repository/comment.repository';

export class DeleteCommentUseCase {
    constructor(private readonly repository: CommentRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
