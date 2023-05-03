import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestController } from './guest/infrastructure/controller/guest.controller';
import { PropertyController } from './property/infrastructure/controller/property.controller';
import { PropertyTypeController } from './property/infrastructure/controller/property-type.controller';
import { AmenityController } from './amenity/infrastructure/controller/amenity.controller';
import { RoomController } from './room/infrastructure/controller/room.controller';
import { BookingController } from './booking/infrastructure/controller/booking.controller';
import { BookingStatusController } from './booking/infrastructure/controller/booking-status.controller';
import { AdminController } from './admin/infrastructure/controller/admin.controller';

import { getEnvPath } from './shared/config/helpers';

import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.service';
import { PropertyUsecaseModule } from './property/infrastructure/module/property.usecase.module';
import { GuestUsecaseModule } from './guest/infrastructure/module/guest.usecase.module';
import { AmenityUsecaseModule } from './amenity/infrastructure/module/amenity.usecase.module';
import { RoomUseCaseModule } from './room/infrastructure/module/roomUseCaseModule';
import { BookingUsecaseModule } from './booking/infrastructure/module/booking.usecase.module';
import { AdminUsecaseModule } from './admin/infrastructure/module/admin.usecase.module';
import { UserController } from './user/infrastructure/controller/user.controller';
import { UserUsecaseModule } from './user/infrastructure/module/user.usecase.module';
import { ExceptionsModule } from '@shared/infrastructure/module/exceptions.module';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        ExceptionsModule,
        PropertyUsecaseModule.register(),
        GuestUsecaseModule.register(),
        AmenityUsecaseModule.register(),
        RoomUseCaseModule.register(),
        BookingUsecaseModule.register(),
        AdminUsecaseModule.register(),
        UserUsecaseModule.register(),
        AdminUsecaseModule.register(),
    ],
    controllers: [
        GuestController,
        PropertyController,
        PropertyTypeController,
        AmenityController,
        RoomController,
        BookingController,
        BookingStatusController,
        AdminController,
        UserController,
        AdminController,
    ],
    providers: [],
})
export class AppModule {}
