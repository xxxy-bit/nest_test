import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    whitelist: true, // 开启白名单模式
    forbidNonWhitelisted: true, // 禁止非白名单模式
  )); // 添加全局验证管道
  await app.listen(3000);
}
bootstrap();
