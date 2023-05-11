import { UserRepository } from '../infrastructure/repository/user.repository';

export class DeleteUserUseCase {
    constructor(private readonly repository: UserRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
