import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import AmenitySeeder from '../seeds/01-amenity.seeder';
import PropertySeeder from '../seeds/04-property.seeder';
import PropertyTypeSeeder from '../seeds/03-property-type.seeder';
import RoomSeeder from '../seeds/02-room.seeder';
import AdminSeeder from '../seeds/01-admin.seeder';

export default class InitSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        await runSeeders(dataSource, {
            seeds: [
                AdminSeeder,
                AmenitySeeder,
                PropertyTypeSeeder,
                PropertySeeder,
                RoomSeeder,
            ],
            factories: [],
        });
    }
}
