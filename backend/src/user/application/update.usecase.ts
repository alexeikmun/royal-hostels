import { UpdateUserDto } from '../infrastructure/dto/user.dto';
import { UserModel } from '../domain/model/user.model';
import { UserRepository } from '../infrastructure/repository/user.repository';
import { UserMapper } from '../infrastructure/utils/user.mapper';

export class UpdateUserUseCase {
    constructor(
        private readonly repository: UserRepository,
        private readonly mapper: UserMapper,
    ) {}

    async execute(
        id: number,
        updateDto: UpdateUserDto,
    ): Promise<UserModel> {
        const entity = this.mapper.toEntity(updateDto);
        const updatedEntity = await this.repository.update(id, entity);
        return this.mapper.toDomain(updatedEntity);
    }
}
