import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false, // Desabilita mensagens de erro padrão
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
