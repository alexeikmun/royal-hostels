import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from '../repository/admin.repository';
import { Admin } from '../entity/admin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Admin])],
    providers: [AdminRepository],
    exports: [AdminRepository],
})
export class AdminRepositoryModule {}
