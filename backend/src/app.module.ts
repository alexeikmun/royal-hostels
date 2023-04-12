import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestController } from './guest/infrastructure/controller/guest.controller';
import { GuestUseCasesModule } from './guest/infrastructure/module/guest.usecases.module';
import { PropertyController } from './property/infrastructure/controller/property.controller';
import { PropertyTypeController } from './property/infrastructure/controller/property-type.controller';
import { PropertyUseCasesModule } from './property/infrastructure/module/property.usecases.module';
import { getEnvPath } from './shared/config/helpers';
import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.service';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        GuestUseCasesModule,
        PropertyUseCasesModule,
    ],
    controllers: [GuestController, PropertyController, PropertyTypeController],
    providers: [],
})
export class AppModule {}
