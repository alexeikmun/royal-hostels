import { AdminRepository } from '../infrastructure/repository/admin.repository';

export class DeleteAdminUseCase {
    constructor(private readonly repository: AdminRepository) {}

    async execute(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
