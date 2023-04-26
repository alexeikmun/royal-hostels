import { Profile } from '../infrastructure/entity/profile.entity';
import { ProfileRepository } from '../infrastructure/repository/profile.repository';

export class FindOneProfileUseCase {
    constructor(private readonly repository: ProfileRepository) {}

    async execute(id: number): Promise<Profile> {
        return await this.repository.findOne(id);
    }
}
