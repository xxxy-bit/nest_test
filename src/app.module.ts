import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Controller } from './test1/test1.controller';
import { Dir1Controller } from './sour/dir1/dir1.controller';
import { Test2Module } from './test2/test2.module';

@Module({
  imports: [Test2Module],
  controllers: [AppController, Test1Controller, Dir1Controller],
  providers: [AppService],
})
export class AppModule {}
