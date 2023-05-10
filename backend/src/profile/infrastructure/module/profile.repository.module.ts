import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileRepository } from '../repository/profile.repository';
import { Profile } from '../entity/profile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    providers: [ProfileRepository],
    exports: [ProfileRepository],
})
export class ProfileRepositoryModule {}
