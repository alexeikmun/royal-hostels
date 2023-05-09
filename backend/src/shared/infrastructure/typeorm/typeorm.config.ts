import { DataSourceOptions, DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './src/shared/config/envs/development.env' });
}

const config: DataSourceOptions = {
    username: 'root',
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    migrationsTableName: 'migration_todo',
    migrations: ['database/migrations/**/*{.ts,.js}'],
};

console.log(config);

export default new DataSource(config);
