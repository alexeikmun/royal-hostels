import { BookingStatusModel } from 'src/booking/domain/model/booking-status.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';

@Entity()
export class BookingStatus implements BookingStatusModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @OneToMany(() => Booking, (booking) => booking.status)
    bookings: Booking[];
}
