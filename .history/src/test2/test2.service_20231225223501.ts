import { Injectable } from '@nestjs/common';
import { Test2 } from './entities/test2.entity';

@Injectable()
export class Test2Service {
    private test2 : Test2[] = [
        {
            id: 1,
            name: 'name1',
            brand: '娃哈哈',
            flavors: ['你好1', '你好2', '你好3']
        },
    ];

    

    
}
