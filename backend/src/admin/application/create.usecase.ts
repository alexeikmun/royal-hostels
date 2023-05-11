import { CreateAdminDto } from '../infrastructure/dto/admin.dto';
import { AdminModel } from '../domain/model/admin.model';
import { AdminRepository } from '../infrastructure/repository/admin.repository';
import { AdminMapper } from '../infrastructure/utils/admin.mapper';
import { BcryptService } from 'src/auth/infrastructure/services/bcrypt.service';

export class CreateAdminUseCase {
    constructor(
        private readonly repository: AdminRepository,
        private readonly mapper: AdminMapper,
        private readonly bycript: BcryptService,
    ) {}

    async execute(createDto: CreateAdminDto): Promise<AdminModel> {
        const criptedPassword = await this.bycript.hash(createDto.password);

        const newEntity = await this.repository.create(
            createDto,
            criptedPassword,
        );
        return this.mapper.toDomain(newEntity);
    }
}
