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
import { AuthUsecasesModule } from './auth/infrastructure/module/auth.usecase.module';
import { BcryptModule } from './auth/infrastructure/module/bcrypt.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './auth/infrastructure/strategies/local.strategy';
import { JwtStrategy } from './auth/infrastructure/strategies/jwt.strategy';
import { JwtRefreshTokenStrategy } from './auth/infrastructure/strategies/jwtRefresh.strategy';
import { AuthController } from './auth/infrastructure/controller/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtServiceModule } from './auth/infrastructure/module/jwt.module';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.secret,
        }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        ExceptionsModule,
        JwtServiceModule,
        BcryptModule,
        PropertyUsecaseModule.register(),
        GuestUsecaseModule.register(),
        AmenityUsecaseModule.register(),
        RoomUseCaseModule.register(),
        BookingUsecaseModule.register(),
        AdminUsecaseModule.register(),
        UserUsecaseModule.register(),
        AdminUsecaseModule.register(),
        AuthUsecasesModule.register(),
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
        AuthController,
    ],
    providers: [LocalStrategy, JwtStrategy, JwtRefreshTokenStrategy],
})
export class AppModule {}
