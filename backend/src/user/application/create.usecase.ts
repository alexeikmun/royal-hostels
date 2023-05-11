import { CreateUserDto } from '../infrastructure/dto/user.dto';
import { UserModel } from '../domain/model/user.model';
import { UserRepository } from '../infrastructure/repository/user.repository';
import { UserMapper } from '../infrastructure/utils/user.mapper';

export class CreateUserUseCase {
    constructor(
        private readonly repository: UserRepository,
        private readonly mapper: UserMapper,
    ) {}

    async execute(createDto: CreateUserDto): Promise<UserModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
