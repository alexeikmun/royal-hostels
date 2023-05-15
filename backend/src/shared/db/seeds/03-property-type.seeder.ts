import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { PropertyType } from 'src/property/infrastructure/entity/property-type.entity';
import propertyTypesArray from '../data/property-type';

export let typeCache: PropertyType[] = [];

export default class PropertyTypeSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const repository = dataSource.getRepository(PropertyType);

        const data = [];

        for (const prop of propertyTypesArray) {
            const temp = await repository.findOneBy({
                name: prop.name,
            });

            if (!temp) {
                data.push(prop);
            }
        }

        await repository.insert(data);

        const cache = await repository.find();

        typeCache = [...cache];
    }
}
