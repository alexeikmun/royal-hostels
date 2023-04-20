import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app: NestExpressApplication = await NestFactory.create(AppModule);

    const openApiConfig = new DocumentBuilder()
        .setTitle('Backend test')
        .setDescription('This is an API to simulate a hostel booking service')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, openApiConfig);
    SwaggerModule.setup('open-api', app, document);

    const config: ConfigService = app.get(ConfigService);
    const port: number = config.get<number>('APP_PORT');

    await app.listen(port, () => {
        console.info(
            '[Endpoint] 🚀 Application running on: ',
            config.get<string>('BASE_URL'),
        );
        console.info(
            '[OpenApi] 📖 Endpoint specification running on: ',
            config.get<string>('OPENAPI_URL'),
        );
    });
}
bootstrap();
