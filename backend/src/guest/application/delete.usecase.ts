import { GuestRepository } from '../infrastructure/repository/guest.repository';

export class DeleteGuestUseCase {
    constructor(private readonly guestRepository: GuestRepository) {}

    async execute(id: number): Promise<void> {
        await this.guestRepository.delete(id);
    }
}
