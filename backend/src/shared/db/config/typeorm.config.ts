import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import { getEnvPath } from '../../config/helpers';
import InitSeeder from './init.seeder';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const envPath = path.join(__dirname, '..', '..', 'config', 'envs');
const entitiesPath = path.join(__dirname, '..', '..', '..');
const migrationsPath = path.join(__dirname, '..');

const envFilePath: string = getEnvPath(envPath);

ConfigModule.forRoot({
    envFilePath,
});

const options = {
    type: 'postgres',
    host: process.env.LOCAL_HOST,
    port: process.env.LOCAL_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [entitiesPath + '/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: [migrationsPath + '/migrations/**/*.ts'],
    seeds: [InitSeeder],
};

export const source = new DataSource(
    options as DataSourceOptions & SeederOptions,
);
