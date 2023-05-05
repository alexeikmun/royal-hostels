import { Admin } from 'src/admin/infrastructure/entity/admin.entity';
import {
    CreateAdminDto,
    UpdateAdminDto,
} from 'src/admin/infrastructure/dto/admin.dto';

export interface AdminRepositoryInterface {
    create(model: CreateAdminDto, password: string): Promise<Admin>;
    update(id: number, model: UpdateAdminDto): Promise<Admin>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<Admin>;
    find(): Promise<Admin[]>;
}
