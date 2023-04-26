import { UpdateProfileDto } from '../infrastructure/dto/profile.dto';
import { ProfileModel } from '../domain/model/profile.model';
import { ProfileRepository } from '../infrastructure/repository/profile.repository';
import { ProfileMapper } from '../infrastructure/utils/profile.mapper';

export class UpdateProfileUseCase {
    constructor(
        private readonly repository: ProfileRepository,
        private readonly mapper: ProfileMapper,
    ) {}

    async execute(
        id: number,
        updateDto: UpdateProfileDto,
    ): Promise<ProfileModel> {
        const entity = this.mapper.toEntity(updateDto);
        const updatedEntity = await this.repository.update(id, entity);
        return this.mapper.toDomain(updatedEntity);
    }
}
