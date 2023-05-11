import { User } from '../infrastructure/entity/user.entity';
import { UserRepository } from '../infrastructure/repository/user.repository';

export class FindUsersUseCase {
    constructor(private readonly repository: UserRepository) {}

    async execute(): Promise<User[]> {
        return await this.repository.find();
    }
}
