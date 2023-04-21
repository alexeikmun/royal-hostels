import { CreateAdminDto } from '../infrastructure/dto/admin.dto';
import { AdminModel } from '../domain/model/admin.model';
import { AdminRepository } from '../infrastructure/repository/admin.repository';
import { AdminMapper } from '../infrastructure/utils/admin.mapper';

export class CreateAdminUseCase {
    constructor(
        private readonly repository: AdminRepository,
        private readonly mapper: AdminMapper,
    ) {}

    async execute(createDto: CreateAdminDto): Promise<AdminModel> {
        const newEntity = await this.repository.create(createDto);
        return this.mapper.toDomain(newEntity);
    }
}
