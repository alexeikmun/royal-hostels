import { CreateGuestDto } from 'src/guest/infrastructure/dto/create-guest.dto';
import { UpdateGuestDto } from 'src/guest/infrastructure/dto/update-guest.dto';
import { GuestModel } from 'src/guest/domain/model/guest.model';
import { Guest } from '../entity/guest.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestMapper {
    toEntity(guest: CreateGuestDto | UpdateGuestDto): Guest {
        const guestEntity = new Guest();
        guestEntity.name = guest.name;
        guestEntity.age = guest.age;
        guestEntity.email = guest.email;
        guestEntity.phone = guest.phone;
        guestEntity.city = guest.city;
        guestEntity.address = guest.address;
        return guestEntity;
    }

    toEntityWithContext(
        guestEntity: Guest,
        guestDto: CreateGuestDto | UpdateGuestDto,
    ): Guest {
        guestEntity.name = guestDto.name;
        guestEntity.age = guestDto.age;
        guestEntity.email = guestDto.email;
        guestEntity.phone = guestDto.phone;
        guestEntity.city = guestDto.city;
        guestEntity.address = guestDto.address;
        return guestEntity;
    }

    toDomain(guest: Guest): GuestModel {
        const guestDomain = new GuestModel();
        guestDomain.id = guest.id;
        guestDomain.name = guest.name;
        guestDomain.age = guest.age;
        guestDomain.email = guest.email;
        guestDomain.phone = guest.phone;
        guestDomain.city = guest.city;
        guestDomain.address = guest.address;
        return guestDomain;
    }
}
