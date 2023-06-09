import { AdminModel } from 'src/admin/domain/model/admin.model';
import { Property } from 'src/property/infrastructure/entity/property.entity';
import { User } from 'src/user/infrastructure/entity/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

@Entity()
export class Admin extends AdminModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', nullable: false })
    isSuper: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn({ name: 'id' })
    user: User;

    @OneToMany(() => Property, (property) => property.admin)
    properties: Property[];
}
