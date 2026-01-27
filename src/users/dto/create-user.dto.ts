import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  username: string;

  @IsEmail()
  @MaxLength(100)
  @IsNotEmpty()
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
