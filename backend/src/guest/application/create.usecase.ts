import { CreateGuestDto } from '../infrastructure/dto/create-guest.dto';
import { GuestModel } from '../domain/model/guest.model';
import { GuestRepository } from '../infrastructure/repository/guest.repository';
import { GuestMapper } from '../infrastructure/utils/guest.mapper';

export class CreateGuestUseCase {
    constructor(
        private readonly guestRepository: GuestRepository,
        private readonly guestMapper: GuestMapper,
    ) {}

    async execute(createGuestDto: CreateGuestDto): Promise<GuestModel> {
        const newGuest = await this.guestRepository.create(createGuestDto);
        return this.guestMapper.toDomain(newGuest);
    }
}
