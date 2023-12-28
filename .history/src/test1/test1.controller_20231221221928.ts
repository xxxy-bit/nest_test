import { Body, Controller, Get, HttpCode, Param, Post, HttpStatus  } from '@nestjs/common';

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

    // POST 方法，body可以拿全部参数，也可以拿指定参数
    @Post()
    @HttpCode(HttpStaus)
    create(@Body('name') body){
        return body;
    }
}
