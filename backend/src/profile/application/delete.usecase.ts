import { ProfileRepository } from '../infrastructure/repository/profile.repository';

export class DeleteProfileUseCase {
    constructor(private readonly repository: ProfileRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
