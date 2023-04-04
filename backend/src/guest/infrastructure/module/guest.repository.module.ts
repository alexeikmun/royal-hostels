import { Module } from '@nestjs/common';
import { Guest } from '../entity/guest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestRepository } from '../repository/guest.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Guest])],
    providers: [GuestRepository],
    exports: [GuestRepository],
})
export class GuestRepositoryModule {}
