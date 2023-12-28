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

    findAll() {
        return this.test2;
    }

    findOne(id: string) {
        return this.test2.find(item => item.id === +id);
    }

    create(createTest2Dto: any) {
        this.test2.push(createTest2Dto)
    }

    update(id: string, updateTest2Dto: any) {
        const existingTest2 = this.findOne(id);
        if(existingTest2){
            // update the existing entiey
        }
    }

    remove(id: string) {
        const Test2Index = this.test2.findIndex(item => item.id === +id);
        if(Test2Index >= 0) {
            this.test2.splice(Test2Index, 1);
        }
    }

    
}
