import { Controller, Get, Param } from '@nestjs/common';

@Controller('test1')
export class Test1Controller {
    // 通过 Get 访问路由
    @Get()
    findAll(){
        return 'this is test1.';
    }

    // 获取路由后的 id 值
    @Get(':id')
    findOne(@Param('id') id: string){
        return `this is ${id}`;
    }
}
