import { Module } from '@nestjs/common';
import { UserMapper } from '../utils/user.mapper';

@Module({
    providers: [UserMapper],
    exports: [UserMapper],
})
export class UserMapperModule {}
