import { Controller, Get } from '@nestjs/common';

@Controller('test2')
export class Test2Controller {
    @Get()
    findAll(){
        return 'test2'
    }
}
