import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './shared/config/helpers';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
