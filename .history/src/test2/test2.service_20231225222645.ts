import { Injectable } from '@nestjs/common';
import { Test2 } from './entities/test2.entity';

@Injectable()
export class Test2Service {
    private test2 : Test2[] = [
        {
            id: number;
            name: string;
            brand: string;
            flavors: string[];
        }
    ];
}
