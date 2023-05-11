import { CreateUserDto } from 'src/user/infrastructure/dto/user.dto';
import { UserModel } from '../model/user.model';

export interface UserRepositoryInterface {
    create(model: CreateUserDto): Promise<UserModel>;
    update(id: number, model: CreateUserDto): Promise<UserModel>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<UserModel>;
    find(): Promise<UserModel[]>;
    updateLastLogin(email: string): Promise<void>;
    updateRefreshToken(email: string, refreshToken: string): Promise<void>;
}
