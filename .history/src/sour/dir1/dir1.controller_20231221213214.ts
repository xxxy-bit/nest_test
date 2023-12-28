import { Controller, Get } from '@nestjs/common';

@Controller()
export class Dir1Controller {

    @Get()
    findAll(){
        return 'This action returns all dir1';
    }
}
