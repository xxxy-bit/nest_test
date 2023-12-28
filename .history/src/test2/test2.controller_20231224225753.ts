import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('test2')
export class Test2Controller {
    @Get()
    findAll(){
        return 'test2'
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
