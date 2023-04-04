import { Module } from '@nestjs/common';
import { GuestMapper } from '../utils/guest.mapper';

@Module({
    providers: [GuestMapper],
    exports: [GuestMapper],
})
export class GuestMapperModule {}
