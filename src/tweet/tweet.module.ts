import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  exports: [TweetService], // can be imported by others modules
  imports: [UsersModule],
})
export class TweetModule {}
