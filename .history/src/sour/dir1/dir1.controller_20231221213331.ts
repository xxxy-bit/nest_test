import { Controller, Get } from '@nestjs/common';

@Controller('dir1')
export class Dir1Controller {

    @Get('dir1')
    findAll(){
        return 'This action returns all dir1';
    }
}
