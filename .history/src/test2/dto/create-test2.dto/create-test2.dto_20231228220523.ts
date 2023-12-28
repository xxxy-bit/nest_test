import { IsString } from "class-validator";

export class CreateTest2Dto {
    @IsString()
    readonly name: string;
    readonly brand: string;
    readonly flavors: string[];
}
