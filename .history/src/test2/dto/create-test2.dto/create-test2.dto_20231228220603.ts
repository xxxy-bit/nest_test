import { IsString } from "class-validator";

export class CreateTest2Dto {
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly brand: string;
    
    @IsString({ each: true }) // 该字符串每个元素必须是字符串
    readonly flavors: string[];
}
