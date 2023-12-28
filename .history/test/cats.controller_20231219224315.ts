import { Controller, Get, Req, Post, HttpCode } from '@nestjs/common'''
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}