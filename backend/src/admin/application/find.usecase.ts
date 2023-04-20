import { Admin } from '../infrastructure/entity/admin.entity';
import { AdminRepository } from '../infrastructure/repository/admin.repository';

export class FindAdminsUseCase {
    constructor(private readonly repository: AdminRepository) {}

    async execute(): Promise<Admin[]> {
        return await this.repository.find();
    }
}
