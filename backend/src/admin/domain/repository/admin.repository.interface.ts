import { AdminModel } from '../model/admin.model';

export interface AdminRepositoryInterface {
    create(model: AdminModel): Promise<AdminModel>;
    update(id: number, model: AdminModel): Promise<AdminModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<AdminModel>;
    find(): Promise<AdminModel[]>;
}
