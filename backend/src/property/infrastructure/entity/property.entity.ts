import { PropertyModel } from 'src/property/domain/model/property.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { PropertyType } from './property-type.entity';
import { Amenity } from 'src/amenity/infrastructure/entity/amenity.entity';
import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import { Room } from 'src/room/infrastructure/entity/room.entity';
import { Admin } from 'src/admin/infrastructure/entity/admin.entity';

@Entity()
export class Property implements PropertyModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    phone: string;

    @Column({ type: 'varchar', nullable: false })
    address: string;

    @Column({ type: 'varchar', nullable: false })
    city: string;

    @Column({ type: 'varchar', nullable: false })
    country: string;

    @Column({ type: 'varchar', nullable: false })
    zipcode: string;

    @Column({ type: 'int', nullable: false })
    typeId: number;

    @Column({ type: 'varchar', nullable: false })
    image: string;

    @Column({ type: 'varchar' })
    description: string;

    @Column({ type: 'decimal', precision: 6, scale: 2 })
    rate: number;

    @Column({ type: 'int' })
    availableRooms: number;

    @Column({ type: 'decimal' })
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => PropertyType, (type) => type.properties)
    type: PropertyType;

    @ManyToMany(() => Amenity, (amenity) => amenity.properties, {
        cascade: true,
    })
    @JoinTable()
    amenities: AmenityModel[];

    @OneToMany(() => Room, (room) => room.property, {
        cascade: true,
    })
    rooms: Room[];

    @ManyToOne(() => Admin, (admin) => admin.properties)
    admin: any;
}
