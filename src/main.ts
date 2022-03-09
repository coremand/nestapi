import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Start of validation implementation
  app.useGlobalPipes(
    new ValidationPipe({
      //Prevents users from adding additional params on request
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
