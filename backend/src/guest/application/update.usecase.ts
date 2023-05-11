import { UpdateGuestDto } from '../infrastructure/dto/update-guest.dto';
import { GuestModel } from '../domain/model/guest.model';
import { GuestRepository } from '../infrastructure/repository/guest.repository';
import { GuestMapper } from '../infrastructure/utils/guest.mapper';

export class UpdateGuestUseCase {
    constructor(
        private readonly guestRepository: GuestRepository,
        private readonly guestMapper: GuestMapper,
    ) {}

    async execute(id: number, guest: UpdateGuestDto): Promise<GuestModel> {
        const updatedGuest = await this.guestRepository.update(id, guest);
        return this.guestMapper.toDomain(updatedGuest);
    }
}
