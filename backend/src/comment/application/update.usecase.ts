import { CommentRepository } from '../infraestructure/repository/comment.repository';
import { UpdateCommentDto } from '../infraestructure/dto/comment.dto';
import { CommentMapper } from '../infraestructure/utils/comment.mapper';
import { CommentModel } from '../domain/model/comment.model';

export class UpdateCommentUseCase {
    constructor(
        private readonly repository: CommentRepository,
        private readonly mapper: CommentMapper,
    ) {}

    async execute(
        id: number,
        updateDto: UpdateCommentDto,
    ): Promise<CommentModel> {
        const entity = this.mapper.toEntity(updateDto);
        const updatedEntity = await this.repository.update(id, entity);
        return this.mapper.toDomain(updatedEntity);
    }
}
