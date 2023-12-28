import { Controller, Get, Req, Post, HttpCode, Header, Redirect } from '@nestjs/common'
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    // @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    @Redirect('https://nest.nodejs.com', 301)
    findAll(): string {
        return 'This action returns all cats';
    }
}