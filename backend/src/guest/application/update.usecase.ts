import { UpdateGuestDto } from '../infrastructure/dto/update-guest.dto';
import { GuestModel } from '../domain/model/guest.model';
import { GuestRepository } from '../infrastructure/repository/guest.repository';
import { GuestMapper } from '../infrastructure/utils/guest.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateGuestUseCase {
    constructor(
        private readonly guestRepository: GuestRepository,
        private readonly guestMapper: GuestMapper,
    ) {}

    async execute(id: number, guest: UpdateGuestDto): Promise<GuestModel> {
        const guestEntity = this.guestMapper.toEntity(guest);
        const updatedGuest = await this.guestRepository.update(id, guestEntity);
        return this.guestMapper.toDomain(updatedGuest);
    }
}
