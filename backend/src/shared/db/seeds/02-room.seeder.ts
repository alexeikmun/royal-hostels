import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { generateRandomIdObjects, getMinMaxIds } from '../utils/utils';
import { Room } from 'src/room/infrastructure/entity/room.entity';
import roomsArray from '../data/room';
import { propertyCache } from './04-property.seeder';
import { amenityCache } from './01-amenity.seeder';

export default class RoomSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        _factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const repository = dataSource.getRepository(Room);

        const data = [];

        for (const prop of roomsArray) {
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

                const range = getMinMaxIds(propertyCache);
                const propertyId = generateRandomIdObjects(
                    1,
                    1,
                    range.minId,
                    range.maxId,
                )[0].id;

                const entity2 = {
                    ...entity,
                    propertyId,
                    amenities: amenities,
                };
                data.push(entity2);
            }
        }

        await repository.save(data);
    }
}
