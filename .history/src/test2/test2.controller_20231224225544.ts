import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
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

    @Patch(':id')
    update(@Param('id') id, @Body() body){
        return `update the ${id}`
    }

}
