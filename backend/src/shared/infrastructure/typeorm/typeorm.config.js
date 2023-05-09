"use strict";
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './src/shared/config/envs/development.env' });
}
var config = {
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
    migrations: ['database/migrations/**/*{.ts,.js}']
};
console.log(config);
exports["default"] = new typeorm_1.DataSource(config);
