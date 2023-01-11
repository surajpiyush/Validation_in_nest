import { ArgumentMetadata, PipeTransform,BadRequestException } from "@nestjs/common";

export class UserPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata):any {
        console.log(value ,typeof value)
       if(value.id==1){
        return value;
       }        
       else{
        throw new BadRequestException('Validation failed');
       }
    }
}