import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, Query } from '@nestjs/common';
import { identity } from 'rxjs';
import { Test2Service } from 'src/test2/test2.service';

@Controller('test2')
export class Test2Controller {
    constructor(private readonly test2Service: Test2Service){}

    @Get()
    // 分页查询 localhost:3000/test2?limit=20&offset=10
    findAll(@Query() query){
        const { limit, offset } = query;

        return `limit is ${limit}, offset is ${offset}`; 
    }

    @Get(':id')
    findOne(@Param('id') id){
        return `this is ${id}`
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    creat(@Body() body){
        return body
    }

    // 通过 Patch 去修改某个值
    @Patch(':id')
    update(@Param('id') id, @Body() body){
        return `update the ${id}`
    }

    // 删除 id 
    @Delete(':id')
    delete(@Param('id') id){
        return `this is delete ${id}`
    }

}
