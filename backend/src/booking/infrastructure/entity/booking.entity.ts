import { BookingModel } from 'src/booking/domain/model/booking.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { BookingStatus } from './booking-status.entity';
import { Room } from '../../../room/infrastructure/entity/room.entity';
import { RoomModel } from '../../../room/domain/model/room.model';

@Entity()
export class Booking implements BookingModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    startDate: Date;

    @UpdateDateColumn()
    endDate: Date;

    @Column({ type: 'int' })
    statusId: number;

    @ManyToOne(() => BookingStatus, (status) => status.bookings)
    status: BookingStatus;

    @Column({ type: 'int', nullable: false })
    guests: number;

    @ManyToMany(() => Room, (room) => room.bookings)
    @JoinTable()
    rooms: RoomModel[];
}
