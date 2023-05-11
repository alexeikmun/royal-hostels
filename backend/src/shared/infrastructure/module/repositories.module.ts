import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenity } from 'src/amenity/infrastructure/entity/amenity.entity';
import { User } from 'src/user/infrastructure/entity/user.entity';
import { Booking } from 'src/booking/infrastructure/entity/booking.entity';
import { BookingStatus } from 'src/booking/infrastructure/entity/booking-status.entity';
import { Guest } from 'src/guest/infrastructure/entity/guest.entity';
import { Property } from 'src/property/infrastructure/entity/property.entity';
import { Room } from 'src/room/infrastructure/entity/room.entity';
import { Admin } from 'src/admin/infrastructure/entity/admin.entity';
import { AmenityRepository } from 'src/amenity/infrastructure/repository/amenity.repository';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';
import { BookingRepository } from 'src/booking/infrastructure/repository/booking.repository';
import { AdminRepository } from 'src/admin/infrastructure/repository/admin.repository';
import { BookingStatusRepository } from 'src/booking/infrastructure/repository/booking-status.repository';
import { GuestRepository } from 'src/guest/infrastructure/repository/guest.repository';
import { PropertyRepository } from 'src/property/infrastructure/repository/property.repository';
import { RoomRepository } from 'src/room/infrastructure/repository/room.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Amenity,
            User,
            Booking,
            BookingStatus,
            Guest,
            Property,
            Room,
            Admin,
        ]),
    ],
    providers: [
        AmenityRepository,
        UserRepository,
        BookingRepository,
        BookingStatusRepository,
        GuestRepository,
        PropertyRepository,
        RoomRepository,
        AdminRepository,
    ],
    exports: [
        AmenityRepository,
        UserRepository,
        BookingRepository,
        BookingStatusRepository,
        GuestRepository,
        PropertyRepository,
        RoomRepository,
        AdminRepository,
    ],
})
export class RepositoriesModule {}
