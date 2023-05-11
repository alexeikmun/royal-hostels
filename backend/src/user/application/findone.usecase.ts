import { User } from '../infrastructure/entity/user.entity';
import { UserRepository } from '../infrastructure/repository/user.repository';

export class FindOneUserUseCase {
    constructor(private readonly repository: UserRepository) {}

    async execute(id: number): Promise<User> {
        return await this.repository.findOne(id);
    }
}
