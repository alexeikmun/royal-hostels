import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentRepositoryInterface } from 'src/comment/domain/repository/comment.repository.interface';
import { Comment } from '../entity/comment.entity';
import { CommentMapper } from '../utils/comment.mapper';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentRepository implements CommentRepositoryInterface {
    private readonly mapper: CommentMapper;

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>,
    ) {
        this.mapper = new CommentMapper();
    }

    async create(comment: CreateCommentDto): Promise<Comment> {
        const newEntity = this.mapper.toEntity(comment);
        return await this.repository.save(newEntity);
    }

    async update(id: number, comment: UpdateCommentDto): Promise<Comment> {
        const currentEntity = await this.repository.findOneBy({ id });
        const updatedEntity = this.mapper.toEntityWithContext(
            currentEntity,
            comment,
        );
        return await this.repository.save(updatedEntity);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findOne(id: number): Promise<Comment> {
        return await this.repository.findOne({
            where: {
                id,
            },
        });
    }

    async find(): Promise<Comment[]> {
        return await this.repository.find();
    }
}
