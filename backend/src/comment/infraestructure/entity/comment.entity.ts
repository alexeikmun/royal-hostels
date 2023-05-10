import { CommentModel } from 'src/comment/domain/model/comment.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment implements CommentModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    comment: string;

    @Column({ type: 'int', nullable: false })
    overallRating: number;
}
