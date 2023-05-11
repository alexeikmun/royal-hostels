import { CreateGuestDto } from 'src/guest/infrastructure/dto/create-guest.dto';
import { UpdateGuestDto } from 'src/guest/infrastructure/dto/update-guest.dto';
import { Guest } from 'src/guest/infrastructure/entity/guest.entity';

export interface GuestRepositoryInterface {
    create(guest: CreateGuestDto): Promise<Guest>;
    update(id: number, guest: UpdateGuestDto): Promise<Guest>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<Guest>;
}
