import { RoomModel } from 'src/room/domain/model/room.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
