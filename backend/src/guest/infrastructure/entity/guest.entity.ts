import { GuestModel } from 'src/guest/domain/model/guest.model';
import { User } from 'src/user/infrastructure/entity/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn({ name: 'id' })
    user: User;
}
