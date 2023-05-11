import { CommentModel } from '../model/comment.model';

export interface CommentRepositoryInterface {
    create(comment: CommentModel): Promise<CommentModel>;
    update(id: number, comment: CommentModel): Promise<CommentModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<CommentModel>;
    find(): Promise<CommentModel[]>;
}
