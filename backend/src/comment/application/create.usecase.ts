import { CommentModel } from '../domain/model/comment.model';
import { CommentRepository } from '../infraestructure/repository/comment.repository';
import { CreateCommentDto } from '../infraestructure/dto/comment.dto';
import { CommentMapper } from '../infraestructure/utils/comment.mapper';

export class CreateCommentUseCase {
    constructor(
        private readonly repository: CommentRepository,
        private readonly mapper: CommentMapper,
    ) {}

    async execute(createDto: CreateCommentDto): Promise<CommentModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
