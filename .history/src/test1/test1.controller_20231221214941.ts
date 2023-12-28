import { Controller, Get } from '@nestjs/common';

@Controller('test1')
export class Test1Controller {
    @Get()
    findAll(){
        return 'this is test1.';
    }

    @Get(':id')
    findOne(@Param('id') id){
        return 'this is ${id}'
    }
}
