import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Controller } from './test1/test1.controller';
import { Dir1Controller } from './sour/dir1/dir1.controller';
import { Test2Controller } from './test2/test2.controller';
import { Test2Service } from './test2/test2.service';

@Module({
  imports: [],
  controllers: [AppController, Test1Controller, Dir1Controller, Test2Controller],
  providers: [AppService, Test2Service],
})
export class AppModule {}
