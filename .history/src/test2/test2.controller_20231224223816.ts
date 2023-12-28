import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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
    creat(@Body() body){
        return
    }

}
