import { Controller, Get } from '@nestjs/common';

@Controller('dir1')
export class Dir1Controller {

    @Get()
    findAll(){
        return 'This action returns all dir1';
    }
}
