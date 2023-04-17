import { Guest } from '../infrastructure/entity/guest.entity';
import { GuestRepository } from '../infrastructure/repository/guest.repository';

export class FindOneGuestUseCase {
    constructor(private readonly guestRepository: GuestRepository) {}

    async execute(id: number): Promise<Guest> {
        return await this.guestRepository.findOne(id);
    }
}
