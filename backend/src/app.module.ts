import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestController } from './guest/infrastructure/controller/guest.controller';
import { PropertyController } from './property/infrastructure/controller/property.controller';
import { PropertyTypeController } from './property/infrastructure/controller/property-type.controller';
import { getEnvPath } from './shared/config/helpers';
import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.service';
import { PropertyProxyModule } from './property/infrastructure/module/property.proxy.module';
import { GuestProxyModule } from './guest/infrastructure/module/guest.proxy.module';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        PropertyProxyModule.register(),
        GuestProxyModule.register(),
    ],
    controllers: [GuestController, PropertyController, PropertyTypeController],
    providers: [],
})
export class AppModule {}
