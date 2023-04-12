import { PropertyModel } from 'src/property/domain/model/property.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { PropertyType } from './property-type.entity';

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => PropertyType, (type) => type.properties)
    type: PropertyType;
}
