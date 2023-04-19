import { BookingModel } from '../model/booking.model';

export interface BookingRepositoryInterface {
    create(booking: BookingModel): Promise<BookingModel>;
    update(id: number, booking: BookingModel): Promise<BookingModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<BookingModel>;
    find(): Promise<BookingModel[]>;
}
