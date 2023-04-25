import { RoomModel } from 'src/room/domain/model/room.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Booking } from '../../../booking/infrastructure/entity/booking.entity';
import { RoomAmenity } from '../../../roomAmenity/infrastructure/entity/roomAmenity.entity';
import { RoomAmenityModel } from '../../../roomAmenity/domain/model/roomAmenity.model';

@Entity()
export class Room implements RoomModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    price: number;

    @Column({ type: 'varchar', nullable: false })
    description: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'int', nullable: false })
    maxGuests: number;

    @ManyToMany(() => Booking, (booking) => booking.rooms)
    bookings: Booking[];

    @ManyToMany(() => RoomAmenity, (roomAmenity) => roomAmenity.rooms)
    @JoinTable()
    amenities: RoomAmenityModel[];
}
