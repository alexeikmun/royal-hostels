import { CreateProfileDto } from '../infrastructure/dto/profile.dto';
import { ProfileModel } from '../domain/model/profile.model';
import { ProfileRepository } from '../infrastructure/repository/profile.repository';
import { ProfileMapper } from '../infrastructure/utils/profile.mapper';

export class CreateProfileUseCase {
    constructor(
        private readonly repository: ProfileRepository,
        private readonly mapper: ProfileMapper,
    ) {}

    async execute(createDto: CreateProfileDto): Promise<ProfileModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
