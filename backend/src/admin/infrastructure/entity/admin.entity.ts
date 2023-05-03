import { AdminModel } from 'src/admin/domain/model/admin.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin implements AdminModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', nullable: false })
    isSuper: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
