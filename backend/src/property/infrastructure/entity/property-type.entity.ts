import { PropertyTypeModel } from 'src/property/domain/model/property-type.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyType implements PropertyTypeModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @OneToMany(() => Property, (property) => property.type)
    properties: Property[];
}
