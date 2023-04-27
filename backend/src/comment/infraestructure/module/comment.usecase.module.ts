import { DynamicModule, Module } from '@nestjs/common';

import {
    CreateCommentUseCase,
    DeleteCommentUseCase,
    FindOneCommentUseCase,
    FindCommentsUseCase,
    UpdateCommentUseCase,
} from 'src/comment/application';

import { CommentRepositoryModule } from './comment.repository.module';
import { CommentRepository } from '../repository/comment.repository';

import { CommentMapperModule } from './comment.mapper.module';
import { CommentMapper } from '../utils/comment.mapper';

import { UseCaseProxy } from '@shared/infrastructure/usecases-proxy/usecases-proxy';

@Module({
    imports: [CommentRepositoryModule, CommentMapperModule],
})
export class CommentUsecaseModule {
    static GET_COMMENT_USECASES_PROXY = 'getCommentUsecasesProxy';
    static GET_COMMENTS_USECASES_PROXY = 'getCommentsUsecasesProxy';
    static POST_COMMENT_USECASES_PROXY = 'postCommentUsecasesProxy';
    static DELETE_COMMENT_USECASES_PROXY = 'deleteCommentUsecasesProxy';
    static PUT_COMMENT_USECASES_PROXY = 'putCommentUsecasesProxy';

    static register(): DynamicModule {
        return {
            module: CommentUsecaseModule,
            providers: [
                {
                    inject: [CommentRepository],
                    provide: CommentUsecaseModule.GET_COMMENT_USECASES_PROXY,
                    useFactory: (repository: CommentRepository) =>
                        new UseCaseProxy(new FindOneCommentUseCase(repository)),
                },
                {
                    inject: [CommentRepository],
                    provide: CommentUsecaseModule.GET_COMMENTS_USECASES_PROXY,
                    useFactory: (repository: CommentRepository) =>
                        new UseCaseProxy(new FindCommentsUseCase(repository)),
                },
                {
                    inject: [CommentRepository, CommentMapper],
                    provide: CommentUsecaseModule.POST_COMMENT_USECASES_PROXY,
                    useFactory: (
                        repository: CommentRepository,
                        commentMapper: CommentMapper,
                    ) =>
                        new UseCaseProxy(
                            new CreateCommentUseCase(repository, commentMapper),
                        ),
                },
                {
                    inject: [CommentRepository, CommentMapper],
                    provide: CommentUsecaseModule.PUT_COMMENT_USECASES_PROXY,
                    useFactory: (
                        repository: CommentRepository,
                        commentMapper: CommentMapper,
                    ) =>
                        new UseCaseProxy(
                            new UpdateCommentUseCase(repository, commentMapper),
                        ),
                },
                {
                    inject: [CommentRepository],
                    provide: CommentUsecaseModule.DELETE_COMMENT_USECASES_PROXY,
                    useFactory: (repository: CommentRepository) =>
                        new UseCaseProxy(new DeleteCommentUseCase(repository)),
                },
            ],
            exports: [
                CommentUsecaseModule.GET_COMMENT_USECASES_PROXY,
                CommentUsecaseModule.GET_COMMENTS_USECASES_PROXY,
                CommentUsecaseModule.POST_COMMENT_USECASES_PROXY,
                CommentUsecaseModule.PUT_COMMENT_USECASES_PROXY,
                CommentUsecaseModule.DELETE_COMMENT_USECASES_PROXY,
            ],
        };
    }
}
