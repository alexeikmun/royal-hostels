import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import PropertySeeder from './property.seeder';
import PropertyTypeSeeder from './property-type.seeder';

export default class InitSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        await runSeeders(dataSource, {
            seeds: [PropertyTypeSeeder, PropertySeeder],
            factories: [],
        });
    }
}
