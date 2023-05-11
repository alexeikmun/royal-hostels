import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Property } from 'src/property/infrastructure/entity/property.entity';
import propertiesArray from '../data/property';
import { amenityCache } from './01-amenity.seeder';
import { typeCache } from './03-property-type.seeder';
import { generateRandomIdObjects, getMinMaxIds } from '../utils/utils';

export let propertyCache: Property[] = [];

export default class PropertySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        _factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const repository = dataSource.getRepository(Property);

        const data = [];

        for (const prop of propertiesArray) {
            const temp = await repository.findOneBy({
                name: prop.name,
            });

            if (!temp) {
                const entity = repository.create(prop);

                const amenityRange = getMinMaxIds(amenityCache);
                const amenities = generateRandomIdObjects(
                    1,
                    4,
                    amenityRange.minId,
                    amenityRange.maxId,
                );

                const typeRange = getMinMaxIds(typeCache);
                const typeId = generateRandomIdObjects(
                    1,
                    1,
                    typeRange.minId,
                    typeRange.maxId,
                )[0].id;

                const entity2 = {
                    ...entity,
                    typeId,
                    // prettier-ignore
                    amenities: amenities,
                };
                data.push(entity2);
            }
        }

        await repository.save(data);

        const cache = await repository.find();

        propertyCache = [...cache];
    }
}
