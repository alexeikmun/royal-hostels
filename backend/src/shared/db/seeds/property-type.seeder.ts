import { PropertyType } from 'src/property/infrastructure/entity/property-type.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class PropertyTypeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const repository = dataSource.getRepository(PropertyType);

        const data = [
            { name: 'hostel' },
            { name: 'hotel' },
            { name: 'apartment' },
            { name: 'room' },
            { name: 'camping' },
        ];

        await repository.insert(data);
    }
}
