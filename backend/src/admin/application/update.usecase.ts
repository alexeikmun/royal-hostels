import { UpdateAdminDto } from '../infrastructure/dto/admin.dto';
import { AdminModel } from '../domain/model/admin.model';
import { AdminRepository } from '../infrastructure/repository/admin.repository';
import { AdminMapper } from '../infrastructure/utils/admin.mapper';

export class UpdateAdminUseCase {
    constructor(
        private readonly repository: AdminRepository,
        private readonly mapper: AdminMapper,
    ) {}

    async execute(id: number, updateDto: UpdateAdminDto): Promise<AdminModel> {
        const updatedEntity = await this.repository.update(id, updateDto);
        return this.mapper.toDomain(updatedEntity);
    }
}
