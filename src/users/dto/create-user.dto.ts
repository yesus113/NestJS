import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString({ message: 'Name should be a string value.' })
  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  gender?: string;

  @IsBoolean()
  isMarried: boolean;
}
