import { IsString, IsInt } from 'class-validator';

export class UserDto {
 
  @IsInt()
  id: number;

  @IsString()
  name: string;


  @IsString()
  city: string;
}