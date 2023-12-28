import { Controller, Get, Param } from '@nestjs/common';

@Controller('test1')
export class Test1Controller {
    @Get()
    findAll(){
        return 'this is test1.';
    }

    // 获取 id 值
    @Get(':id')
    findOne(@Param('id') id: string){
        return `this is ${id}`;
    }
}
