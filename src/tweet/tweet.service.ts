import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly usersService: UsersService) {} //INTER-MODULAR DEPENDENCY
  tweets: { text: string; date: Date; userId: number }[] = [
    {
      text: 'example',
      date: new Date('2026-11-12'),
      userId: 1,
    },
    {
      text: 'example2',
      date: new Date('2026-11-4'),
      userId: 2,
    },
    {
      text: 'example3',
      date: new Date('2026-01-12'),
      userId: 3,
    },
  ];

  getTweets() {}
}
