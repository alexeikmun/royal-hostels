import { Module } from '@nestjs/common';
import {
    CreateGuestUseCase,
    DeleteGuestUseCase,
    FindOneGuestUseCase,
    UpdateGuestUseCase,
} from '../../application/index';
import { GuestMapperModule } from './guest.mapper.module';
import { GuestRepositoryModule } from './guest.repository.module';

@Module({
    imports: [GuestRepositoryModule, GuestMapperModule],
    providers: [
        CreateGuestUseCase,
        DeleteGuestUseCase,
        FindOneGuestUseCase,
        UpdateGuestUseCase,
    ],
    exports: [
        CreateGuestUseCase,
        DeleteGuestUseCase,
        FindOneGuestUseCase,
        UpdateGuestUseCase,
    ],
})
export class GuestUseCasesModule {}
