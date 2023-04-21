import { Admin } from '../infrastructure/entity/admin.entity';
import { AdminRepository } from '../infrastructure/repository/admin.repository';

export class FindOneAdminUseCase {
    constructor(private readonly repository: AdminRepository) {}

    async execute(id: number): Promise<Admin> {
        return await this.repository.findOne(id);
    }
}
