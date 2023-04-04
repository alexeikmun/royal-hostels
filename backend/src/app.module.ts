import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestController } from './guest/infrastructure/controller/guest.controller';
import { GuestUseCasesModule } from './guest/infrastructure/module/guest.usecases.module';
import { getEnvPath } from './shared/config/helpers';
import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.serive';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        GuestUseCasesModule,
    ],
    controllers: [GuestController],
    providers: [],
})
export class AppModule {}
