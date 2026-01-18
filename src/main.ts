import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //intance of own nestapp
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //ignore extra properties
      forbidNonWhitelisted: true, //stop request with extra property
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000); //listen the requests at port 3000
}
bootstrap();
