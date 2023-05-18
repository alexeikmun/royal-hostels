import { Module } from '@nestjs/common';
import { SearchMapper } from '../utils/search.mapper';

@Module({
    providers: [SearchMapper],
    exports: [SearchMapper],
})
export class SearchMapperModule {}
