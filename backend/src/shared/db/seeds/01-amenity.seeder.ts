import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Amenity } from 'src/amenity/infrastructure/entity/amenity.entity';
import amenitiesArray from '../data/amenity';

export let amenityCache: Amenity[] = [];

export default class AmenitySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const repository = dataSource.getRepository(Amenity);

        const data = [];

        for (const prop of amenitiesArray) {
            const temp = await repository.findOneBy({
                name: prop.name,
            });

            if (!temp) {
                data.push(prop);
            }
        }

        await repository.insert(data);

        const cache = await repository.find();

        amenityCache = [...cache];
    }
}
