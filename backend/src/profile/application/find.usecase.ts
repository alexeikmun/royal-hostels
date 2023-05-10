import { Profile } from '../infrastructure/entity/profile.entity';
import { ProfileRepository } from '../infrastructure/repository/profile.repository';

export class FindProfilesUseCase {
    constructor(private readonly repository: ProfileRepository) {}

    async execute(): Promise<Profile[]> {
        return await this.repository.find();
    }
}
