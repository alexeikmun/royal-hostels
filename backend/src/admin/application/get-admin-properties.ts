import { AdminRepository } from '../infrastructure/repository/admin.repository';

export class GetAdminPropertiesUseCase {
    constructor(private readonly repository: AdminRepository) {}

    async execute(id: number): Promise<any> {
        return await this.repository.getAdminProperties(id);
    }
}
