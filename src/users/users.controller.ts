import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') //http://localhost:3000/users
export class UsersController {
  constructor(private usersService: UsersService) {}

  //http://localhost:3000/users/id
  @Get(':id') //optional way [':id/:name', ':id/:name/:gender']
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id, id);
    return this.usersService.getUserById(id); //+id covert the string value to number with '+'
  }
  @Post() //the following method only handle POST requests
  createUser(@Body() user: CreateUserDto) {
    //this.usersService.createUser(user);
    console.log(user);
    return 'A new user has been created';
  }
}
