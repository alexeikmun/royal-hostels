import { ProfileModel } from '../model/profile.model';

export interface ProfileRepositoryInterface {
    create(model: ProfileModel): Promise<ProfileModel>;
    update(id: number, model: ProfileModel): Promise<ProfileModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<ProfileModel>;
    find(): Promise<ProfileModel[]>;
}
