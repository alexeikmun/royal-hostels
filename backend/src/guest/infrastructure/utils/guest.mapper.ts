import { CreateGuestDto } from 'src/guest/infrastructure/dto/create-guest.dto';
import { UpdateGuestDto } from 'src/guest/infrastructure/dto/update-guest.dto';
import { GuestModel } from 'src/guest/domain/model/guest.model';
import { Guest } from '../entity/guest.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/infrastructure/entity/user.entity';

@Injectable()
export class GuestMapper {
    toEntity(guest: CreateGuestDto | UpdateGuestDto): Guest {
        const guestEntity = new Guest();
        guestEntity.user = new User();
        guestEntity.user.name = guest.name;
        guestEntity.user.phone = guest.phone;
        guestEntity.user.city = guest.city;
        guestEntity.user.address = guest.address;
        guestEntity.user.email = guest.email;
        guestEntity.user.country = guest.country;
        guestEntity.user.zipcode = guest.zipcode;
        guestEntity.user.role = guest.role;
        guestEntity.user.password = guest.password;
        return guestEntity;
    }

    toEntityWithContext(
        guestEntity: Guest,
        guestDto: CreateGuestDto | UpdateGuestDto,
    ): Guest {
        guestEntity.user.name = guestDto.name;
        guestEntity.user.phone = guestDto.phone;
        guestEntity.user.city = guestDto.city;
        guestEntity.user.address = guestDto.address;
        guestEntity.user.email = guestDto.email;
        guestEntity.user.country = guestDto.country;
        guestEntity.user.zipcode = guestDto.zipcode;
        guestEntity.user.role = guestDto.role;
        guestEntity.user.password = guestDto.password;
        return guestEntity;
    }

    toDomain(guest: Guest): GuestModel {
        const guestDomain = new GuestModel();
        guestDomain.name = guest.user.name;
        guestDomain.phone = guest.user.phone;
        guestDomain.city = guest.user.city;
        guestDomain.address = guest.user.address;
        guestDomain.email = guest.user.email;
        guestDomain.country = guest.user.country;
        guestDomain.zipcode = guest.user.zipcode;
        guestDomain.role = guest.user.role;
        return guestDomain;
    }
}
