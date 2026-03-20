import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

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

  @IsOptional()
  profile?: CreateProfileDto;
}
