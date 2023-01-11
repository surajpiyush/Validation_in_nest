import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";


@Controller('user')
export class UserController {
@Get(':id')
getById(@Param('id',ParseIntPipe) id:number) :string{
    console.log(id,typeof id);
    return 'this is getById'
}
@Post('/add')
addUser(@Body(new ValidationPipe()) user:UserDto):string{
     console.log(user);
    return 'user added'
}
}