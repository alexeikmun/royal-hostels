import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    @Inject(ConfigService)
    private readonly config: ConfigService;

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            database: this.config.get<string>('DATABASE_NAME'),
            username: this.config.get<string>('DATABASE_USERNAME'),
            password: this.config.get<string>('DATABASE_PASSWORD'),
            autoLoadEntities: true,
            logger: 'file',
            synchronize: true, // never use TRUE in production!
        };
    }
}
