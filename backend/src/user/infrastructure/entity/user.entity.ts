import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Role } from 'src/auth/domain/enum/role.enum';
import { FullUserModel } from 'src/user/domain/model/full.user.model';

@Entity()
export class User implements FullUserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'varchar', nullable: true })
    address: string;

    @Column({ type: 'varchar', nullable: true })
    country: string;

    @Column({ type: 'varchar', nullable: true })
    city: string;

    @Column({ type: 'varchar', nullable: true })
    zipcode: string;

    @Column({ type: 'date', nullable: true })
    birthday: Date;

    @Column({ type: 'varchar', nullable: true })
    phone: string;

    @Column({ type: 'varchar', nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    role: Role;

    @Column({ nullable: true })
    lastLogin?: Date;

    @Column('varchar', { nullable: true })
    hashRefreshToken: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
