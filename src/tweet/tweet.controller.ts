import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';
//http://localhost:3000/tweet
@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get(['', ':userId'])
  public getTweet(@Param('userId', ParseIntPipe) userId: number) {
    return this.tweetService.getTweets(userId);
  }
}
