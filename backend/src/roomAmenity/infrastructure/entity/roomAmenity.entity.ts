import { RoomAmenityModel } from 'src/roomAmenity/domain/model/roomAmenity.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';
import { Room } from 'src/room/infrastructure/entity/room.entity';
@Entity()
export class RoomAmenity implements RoomAmenityModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Room, (room) => room.amenities)
    rooms: Room[];
}
