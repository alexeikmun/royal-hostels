import { Module } from '@nestjs/common';
import { ProfileMapper } from '../utils/profile.mapper';

@Module({
    providers: [ProfileMapper],
    exports: [ProfileMapper],
})
export class ProfileMapperModule {}
