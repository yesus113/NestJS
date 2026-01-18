import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService, //Circular dependency
  ) {}
  users: {
    id: number;
    email: string;
    password: string;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      email: 'admin@gmail.com',
      password: '12345',
      name: 'john',
      age: 28,
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      email: 'admin2@gmail.com',
      password: '12345',
      name: 'mark',
      age: 28,
      gender: 'male',
      isMarried: true,
    },

    {
      id: 3,
      email: 'admin3@gmail.com',
      password: '12345',
      name: 'Cristel',
      age: 23,
      gender: 'female',
      isMarried: false,
    },
  ];

  getAllUsers() {
    if (this.authService.isAuth) {
      return this.users;
    }
    return 'You are not logged-in';
  }

  getUserById(id: number) {
    const usr = this.users.find((x) => x.id === id); //research the user by id
    if (!usr) {
      throw new NotFoundException(`User with id ${id} not found`); //If the user was not found so...
    }
    return usr; //else user object
  }

  createUser(user: {
    id: number;
    email: string;
    password: string;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
