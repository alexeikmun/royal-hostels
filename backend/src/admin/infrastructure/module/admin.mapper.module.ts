import { Module } from '@nestjs/common';
import { AdminMapper } from '../utils/admin.mapper';

@Module({
    providers: [AdminMapper],
    exports: [AdminMapper],
})
export class AdminMapperModule {}
