import { IsString } from "class-validator";

export class CreateTest2Dto {
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly brand: string;
    
    @IsString({ each: true }) // 每个元素必须是字符串
    readonly flavors: string[];
}
