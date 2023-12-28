import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, Query } from '@nestjs/common';
import { identity } from 'rxjs';
import { Test2Service } from 'src/test2/test2.service';
import { CreateTest2Dto } from './dto/create-test2.dto/create-test2.dto';

@Controller('test2')
export class Test2Controller {
    constructor(private readonly test2Service: Test2Service){}

    @Get()
    // 分页查询 localhost:3000/test2?limit=20&offset=10
    findAll(@Query() query){
        // const { limit, offset } = query;
        return  this.test2Service.findAll();
        // return `limit is ${limit}, offset is ${offset}`; 
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        // return `this is ${id}`
        return this.test2Service.findOne(id);
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    creat(@Body() createTest2Dto: CreateTest2Dto){
        // return body
        return this.test2Service.create(createTest2Dto);
    }

    // 通过 Patch 去修改某个值
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        // return `update the ${id}`
        return this.test2Service.update(id, body);
    }

    // 删除 id 
    @Delete(':id')
    delete(@Param('id') id: string){
        // return `this is delete ${id}`
        return this.test2Service.remove(id);
    }

}
