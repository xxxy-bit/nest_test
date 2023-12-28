import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Controller } from './test1/test1.controller';
import { Test2Controller } from './src/test2/test2.controller';

@Module({
  imports: [],
  controllers: [AppController, Test1Controller, Test2Controller],
  providers: [AppService],
})
export class AppModule {}
