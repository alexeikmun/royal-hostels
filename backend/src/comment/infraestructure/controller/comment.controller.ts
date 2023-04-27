import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';
import {
    CreateCommentUseCase,
    UpdateCommentUseCase,
    DeleteCommentUseCase,
    FindOneCommentUseCase,
    FindCommentsUseCase,
} from 'src/comment/application';
import { CommentModel } from 'src/comment/domain/model/comment.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CommentUsecaseModule } from '../module/comment.usecase.module';
import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Controller('comment')
@ApiTags('Comment')
export class CommentController {
    constructor(
        @Inject(CommentUsecaseModule.DELETE_COMMENT_USECASES_PROXY)
        private readonly deleteCommentUseCase: UseCaseProxy<DeleteCommentUseCase>,
        @Inject(CommentUsecaseModule.GET_COMMENTS_USECASES_PROXY)
        private readonly findCommentsUseCase: UseCaseProxy<FindCommentsUseCase>,
        @Inject(CommentUsecaseModule.GET_COMMENT_USECASES_PROXY)
        private readonly findOneCommentUseCase: UseCaseProxy<FindOneCommentUseCase>,
        @Inject(CommentUsecaseModule.POST_COMMENT_USECASES_PROXY)
        private readonly createCommentUseCase: UseCaseProxy<CreateCommentUseCase>,
        @Inject(CommentUsecaseModule.PUT_COMMENT_USECASES_PROXY)
        private readonly updateCommentUseCase: UseCaseProxy<UpdateCommentUseCase>,
    ) {}

    @Post()
    @ApiCreatedResponse({ type: CommentModel })
    async create(
        @Body() createCommentDto: CreateCommentDto,
    ): Promise<CommentModel> {
        return await this.createCommentUseCase
            .getInstance()
            .execute(createCommentDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.findOneCommentUseCase.getInstance().execute(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateCommentDto: UpdateCommentDto,
    ) {
        return await this.updateCommentUseCase
            .getInstance()
            .execute(id, updateCommentDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.deleteCommentUseCase.getInstance().execute(id);
    }

    @Get()
    async find() {
        return await this.findCommentsUseCase.getInstance().execute();
    }
}
