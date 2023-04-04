import { GuestModel } from '../model/guest.model';

export interface GuestRepositoryInterface {
    create(guest: GuestModel): Promise<GuestModel>;
    update(id: number, guest: GuestModel): Promise<GuestModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<GuestModel>;
}
